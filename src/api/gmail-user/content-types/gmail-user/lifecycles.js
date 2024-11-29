const nodemailer = require("nodemailer");
const path = require("path");

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    const { email, titleArticle } = data;

    const existingEntry = await strapi.db
      .query("api::gmail-user.gmail-user")
      .findOne({
        where: {
          email: email,
          titleArticle: titleArticle,
        },
      });

    if (existingEntry) {
      throw new Error(
        "Email của bạn đã đăng ký tải file pdf này rồi, Vui lòng dùng email khác!"
      );
    }
  },

  async beforeUpdate(event) {
    const { data, where } = event.params;
    const { email, titleArticle } = data;

    const currentEntry = await strapi.db
      .query("api::gmail-user.gmail-user")
      .findOne({
        where,
      });

    const existingEntry = await strapi.db
      .query("api::gmail-user.gmail-user")
      .findOne({
        where: {
          email: email,
          titleArticle: titleArticle,
        },
      });

    if (existingEntry && existingEntry.id !== currentEntry.id) {
      throw new Error(
        "Bản ghi với Gmail và tiêu đề bài viết này đã tồn tại. Vui lòng nhập thông tin khác."
      );
    }
  },

  async afterCreate(event) {
    const { result } = event;
    const { email, locale, titleArticle, urlPdf } = result;

    const sendUserEmail = async () => {
      const filename = path.basename(urlPdf);

      let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `<${process.env.SMTP_USER}>`,
        to: email,
        subject: `📥 Download your PDF file - ${titleArticle}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #dddddd; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
            <!-- Header -->
            <div style="background-color: #1fa9ec; color: white; text-align: center; padding: 20px;">
              <h1 style="margin: 0; font-size: 24px;">🎉 Thank You for Your Interest!</h1>
              <p style="margin: 0; font-size: 16px;">Here is your requested PDF</p>
            </div>

            <!-- Body -->
            <div style="padding: 20px; color: #333;">
              <p style="font-size: 16px; line-height: 1.5;">Hi,</p>
              <p style="font-size: 16px; line-height: 1.5;">
                Thank you for your interest in the article titled: <strong>${titleArticle}</strong>.
                You can download the attached PDF file to explore the content.
              </p>
              <div style="margin: 20px 0; text-align: center;">
                <a href="${urlPdf}" style="background-color: #1fa9ec; color: white; padding: 12px 20px; border-radius: 5px; text-decoration: none; font-size: 16px;">📥 Download PDF</a>
              </div>
              <p style="font-size: 14px; color: #555; line-height: 1.5;">
                If the download button doesn’t work, please click the link below:<br>
                <a href="${urlPdf}" style="color: #1fa9ec; word-break: break-all;">${urlPdf}</a>
              </p>
            </div>

            <!-- Footer -->
            <div style="background-color: #f4f4f4; text-align: center; padding: 10px; font-size: 12px; color: #888;">
              <p style="margin: 0;">Gusweb Team</p>
              <p style="margin: 0;">Contact us: support@gusweb.com</p>
            </div>
          </div>
        `,
        attachments: [
          {
            filename: filename,
            path: urlPdf,
            contentType: "application/pdf",
          },
        ],
      });
    };

    const sendManagerEmail = async (managerEmail) => {
      let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Your App" <${process.env.SMTP_USER}>`,
        to: managerEmail,
        subject: "New Form Submission",
        text: `A new form has been submitted:
                - Gmail: ${email}
                - Locale: ${locale}
                - Article: ${titleArticle}`,
      });
    };

    try {
      const adminGmail = await strapi.db
        .query("api::admin-gmail.admin-gmail")
        .findOne();
      const managerEmail = adminGmail ? adminGmail.gmail : null;

      if (managerEmail) {
        sendUserEmail().catch((error) =>
          console.error("Error sending user email:", error)
        );
        sendManagerEmail(managerEmail).catch((error) =>
          console.error("Error sending manager email:", error)
        );
      } else {
        console.error("Admin Gmail not found");
      }
    } catch (error) {
      console.error("Error fetching admin Gmail:", error);
    }

    console.log("Emails are being sent in the background.");
  },
};
