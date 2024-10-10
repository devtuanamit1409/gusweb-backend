"use strict";
const nodemailer = require("nodemailer");

module.exports = {
  async submitForm(ctx) {
    const { email } = ctx.request.body;

    if (!email) {
      return ctx.badRequest("Email is required");
    }

    const pdfFilePath =
      "http://localhost:1337/uploads/Vie_AMIT_GROUP_CAPABILITY_PROFILE_7c3e0ead99_b7659fad43.pdf";

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: "Your PDF Download",
        text: "Here is your PDF file.",
        html: `
          <h1>Download Your PDF</h1>
          <p>Thank you for your submission. Please download your PDF using the link below:</p>
          <a href="${pdfFilePath}" style="display: inline-block; background-color: #28a745; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;">Download PDF</a>
        `,
      });

      const adminEmail = "huynhca2k2@gmail.com";
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: adminEmail,
        subject: "New Submission",
        text: `A new user has submitted their email: ${email}`,
        html: `
          <p>A new user has submitted their email:</p>
          <p><strong>${email}</strong></p>
        `,
      });

      await strapi.entityService.create("api::gmailuser.gmailuser", {
        data: {
          email: email,
        },
      });

      return ctx.send({ message: "Submission successful" }, 200);
    } catch (error) {
      console.error("Error sending email or saving email:", error);
      return ctx.internalServerError(
        "An error occurred while processing your request."
      );
    }
  },
};
