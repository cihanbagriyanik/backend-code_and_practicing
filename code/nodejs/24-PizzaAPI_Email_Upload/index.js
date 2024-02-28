"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors morgan
    $ mkdir logs
    $ nodemon
    ------
    $ npm i jsonwebtoken
    $ npm i swagger-autogen swagger-ui-express redoc-express
    ------
    $ npm i nodemailer
    $ npm i multer

*/
const express = require("express");
const app = express();

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json());

// Check Token:
app.use(require("./src/middlewares/authentication"));

// morgan-logger:
app.use(require("./src/middlewares/logger"));

// res.getModelList:
app.use(require("./src/middlewares/findSearchSortPage"));

/* -------------------------------------------------------------------------- */
//? Sending E-Mail:
// $ npm i nodemailer
// const nodemailer = require("nodemailer");

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

// //? GoogleMail (gmail):
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "cihanbagriyanikde@gmail.com",
//     pass: "lgriawxlsgxcuabt",
//   },
// });
// console.log(transporter);
// //? YandexMail (yandex):
// const transporter = nodemailer.createTransport({
//     service: 'Yandex',
//     auth: {
//         user: 'username@yandex.com',
//         pass: 'password' // your emailPassword
//     }
// })

// transporter.sendMail(
//   {
//     // from: "cihanbagriyanikde@gmail.com", // NOT MUST
//     to: "cihanbagriyanikde@gmail.com",
//     subject: "Test Subject",
//     // Message:
//     text: "Hello to myself!",
//     html: "<p><b>Hello</b> to myself!</p>",
//   },
//   (error, success) => {
//     error ? console.log("Error:", error) : console.log("Success:", success);
//   }
// );

/* -------------------------------------------------------------------------- */
// Routes:

// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PIZZA API",
    isLogin: req.isLogin,
    documents: {
      swagger: "/documents/swagger",
      redoc: "/documents/redoc",
      json: "/documents/json",
    },
    user: req.user,
  });
});

// auth:
app.use("/auth", require("./src/routes/auth"));
// user:
app.use("/users", require("./src/routes/user"));
// token:
app.use("/tokens", require("./src/routes/token"));
// order:
app.use("/orders", require("./src/routes/order"));
// pizza:
app.use("/pizzas", require("./src/routes/pizza"));
// topping:
app.use("/toppings", require("./src/routes/topping"));

// document:
app.use("/documents", require("./src/routes/document"));

/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.
