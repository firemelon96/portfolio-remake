import EmailTemplate from '@/emails/welcomeEmail';
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
// const nodemailer = require('nodemailer')

const sendEmail = async (
  name: string,
  email: string,
  message: string,
  sendTo?: string
) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const emailTemplate = render(EmailTemplate(name, email, message), {
    pretty: true,
  });

  const options = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Reach out | ${name}`,
    html: emailTemplate,
  };

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    }
    console.log(info);
  });
};

export default sendEmail;
