"use strict";
/* -------------------------------------------------------

    EXPRESSJS - MIDDLEWARES

------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* -------------------------------------------------------------------------- */
//? Middleware functions must be has three parameters.
//? Last parameter is for next().

// // Middleware:
// app.get("/", (req, res, next) => {
//   //   res.send({
//   //     message: "Middleware Running",
//   //   });

//   // Go to next function:
//   next();
// });

// // Route-Path:
// app.get("/", (req, res) => {
//   res.send({
//     message: "Welcome",
//   });
// });

/* -------------------------------------------------------------------------- */
// // Middleware:
// app.get("/", (req, res, next) => {
//   if (req.query.username == "clarusway") {
//     // Send data with req/res:
//     req.newVariable = "Welcome";
//     res.username = "Clarusway";

//     next();
//   } else {
//     res.send({
//       message: "username is wrong!",
//     });
//   }
// });

// // Route-Path:
// app.get("/", (req, res) => {
//   res.send({
//     message: req.newVariable + " " + res.username,
//   });
// });
/* -------------------------------------------------------------------------- */
// // Middleware:
// app.get("/", (req, res, next) => {
//   req.message1 = "Middleware-1 runned.";
//   next();
// });
// app.get("/", (req, res, next) => {
//   req.message2 = "Middleware-2 runned.";
//   next();
// });
// app.get("/", (req, res, next) => {
//   req.message3 = "Middleware-3 runned.";
//   next();
// });
// app.get("/", (req, res, next) => {
//   req.message4 = "Middleware-3 runned.";
//   next();
// });

// // Route-Path:
// app.get("/", (req, res) => {
//   res.send({
//     message1: req.message1,
//     message2: req.message2,
//     message3: req.message3,
//     message4: req.message4,
//     message: "Finished",
//   });
// });

/* -------------------------------------------------------------------------- */

// const middleFunction1 = (req, res, next) => {
//   req.message1 = "MiddlewareFunction-1 runned.";
//   next();
// };
// const middleFunction2 = (req, res, next) => {
//   req.message2 = "MiddlewareFunction-2 runned.";
//   next();
// };

// // Call Middlewares:
// app.use("/", middleFunction1, middleFunction2); // Recommended
// // app.use("/", [middleFunction1, middleFunction2]);

// // Route-Path:
// app.get("/", (req, res) => {
// // app.get("/", middleFunction1, middleFunction2, (req, res) => { // middleware functions callback routing hemen oncesinde de cagirabilir.
//   res.send({
//     message1: req.message1,
//     message2: req.message2,

//     message: "Finished",
//   });
// });

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

// const middleFunction1 = require("./middlewares/")
// const middleFunctionArray = require("./middlewares/");
// const [middleFunction1, middleFunction2] = require("./middlewares/");
const { middleFunction1, middleFunction2 } = require("./middlewares/");

app.use("/", middleFunction1, middleFunction2);
// app.use("/path", middleFunction1, middleFunction2);
// app.use(middleFunction1, middleFunction2); // default butun url ler yani " * "

app.get("/", (req, res) => {
  // app.get("/", middleFunction1, (req, res) => {
  // app.get("/", middleFunctionArray, (req, res) => {
  // app.get("/", middleFunction1, middleFunction2, (req, res) => {
  // app.get("/", middleFunction1, middleFunction2, (req, res) => {
  res.send({
    message1: req.message1,
    message2: req.message2,
    message: "Finished",
  });
});

// app.get("/path", (req, res) => {
//   res.send({
//     message1: req.message1,
//     message2: req.message2,
//     message: "Path Finished",
//   });
// });
/* -------------------------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
