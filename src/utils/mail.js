import Mailgen from "mailgen";
import nodemailer from "nodemailer";

//3 crating a sendmail function which takes mailstructure , sendermail and others thing as options object for specific pourpose of mail sending
//how we are  writing it to be found in the node mailer docs 
const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task Manager",
      link: "https://taskmanagelink.com",
    },
  });

  const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);

  const emailHtml = mailGenerator.generate(options.mailgenContent);

  //this set up is for where to send the mail
  //for testing we use mailtrap set up so that the massage comes to our
  //gmail
  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mail = {
    from: "mail.taskmanager@example.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error(
      "Email service failed siliently. Make sure that you have provided your MAILTRAP credentials in the .env file",
    );
    console.error("Error: ", error);
  }
};

//1 structure of mail to be send , it is an default structure  to be found in the docs
const emailVerificationMailgenContent = (username, verficationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our App! we'are excited to have you on board.",
      action: {
        instructions:
          "To verify your email please click on the following button",
        button: {
          color: "#22BC66",
          text: "Verify your email",
          link: verficationUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

//2 structure of mail to be send
const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got a request to reset the password of your account",
      action: {
        instructions:
          "To reset your password click on the following button or link",
        button: {
          color: "#22BC66",
          text: "Reset password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

//4
export {
  emailVerificationMailgenContent,
  forgotPasswordMailgenContent,
  sendEmail,
};
