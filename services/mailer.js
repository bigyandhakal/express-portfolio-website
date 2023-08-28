const nodemailer = require("nodemailer");
const fs = require("fs");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "dhakalbigyan0@gmail.com",
    pass: "kamkbdadkzxolvhc",
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

const mailer = async (payload) => {
  const { to, data } = payload;
  const messageOptions = {
    from: '"Bigyan Dhakal" <dhakalbigyan0@gmail.com>', // sender address
    to: to,
    subject: "Contact detail from website", // Subject line
    html: JSON.stringify(data), // html body
  };
  const info = await transporter.sendMail(messageOptions);
  return info.messageId;
};

module.exports = { mailer };
