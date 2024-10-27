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
        to: email,
        subject: "Download your PDF file",
        text: `Please find the attached PDF for the article ${titleArticle}.`,
        attachments: [
          {
            filename: "Vie_AMIT_GROUP_CAPABILITY_PROFILE_7c3e0ead99.pdf",
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
