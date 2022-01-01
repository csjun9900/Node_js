const nodemailer = require("nodemailer");
const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f19f3ea70b190a",
    pass: "773ddba185552a",
  },
};

const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

let email_data = {
  from: "sejun1038@gmail.com",
  to: "sejun1038@gmail.com",
  subject: "텍스트 메일 입니다.",
  text: "node.js 한 시간 만에 끝내보자.",
};

send(email_data);
