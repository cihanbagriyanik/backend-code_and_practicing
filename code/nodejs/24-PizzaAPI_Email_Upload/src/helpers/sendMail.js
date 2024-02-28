"use strict";
/* -------------------------------------------------------
    * NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
//sendMail(to,subject, message)

//? Sending E-Mail:
// $ npm i nodemailer
const nodemailer = require("nodemailer");

module.exports = function (to, subject, message) {
  // Create Test (Fake) Email Account:
  // nodemailer.createTestAccount().then((email) => console.log(email));
  /* ********** */
  // {
  //   user: 'vtdrggedgiu7iwgw@ethereal.email',
  //   pass: 'S1n3mWgvyhuccmHeem',
  //   smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
  //   imap: { host: 'imap.ethereal.email', port: 993, secure: true },
  //   pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
  //   web: 'https://ethereal.email'
  // }
  /* ********** */

  //Connect to mail-server:
  /*
const transporter = nodemailer.createTransport({
  // SMTP
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // (Alternatifler) => true, tls, ssl
  auth: {
    user: "vtdrggedgiu7iwgw@ethereal.email",
    pass: "S1n3mWgvyhuccmHeem",
  },
});
// console.log(transporter);
*/

  // SendMail:
  /*
transporter.sendMail(
  {
    from: "vtdrggedgiu7iwgw@ethereal.email",
    to: "cihanbagriyanikde@gmail.com", // "a@b.com, b@a.com"
    subject: "Test Subject",
    // Message:
    text: "Hello to myself!",
    html: "<p><b>Hello</b> to myself!</p>",
  },
  (error, success) => {
    error ? console.log("Error:", error) : console.log("Success:", success);
  }
);
*/

  //? GoogleMail (gmail):
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "cihanbagriyanikde@gmail.com",
      pass: "lgriawxlsgxcuabt",
    },
  });
  console.log(transporter);
  // //? YandexMail (yandex):
  // const transporter = nodemailer.createTransport({
  //     service: 'Yandex',
  //     auth: {
  //         user: 'username@yandex.com',
  //         pass: 'password' // your emailPassword
  //     }
  // })

  transporter.sendMail(
    {
      // from: "cihanbagriyanikde@gmail.com", // NOT MUST
      to: to, // "cihanbagriyanikde@gmail.com",
      subject: subject, //"Test Subject",
      // Message:
      text: message, // "Hello to myself!",
      html: message, // "<p><b>Hello</b> to myself!</p>",
    },
    (error, success) => {
      error ? console.log("Error:", error) : console.log("Success:", success);
    }
  );
};
