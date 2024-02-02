"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* -------------------------------------------------------------------------- */
// app.get("/user/:id", (req, res) => {
//   const userId = req.params.id;

//   if (isNaN(userId)) {
//     // res.send({
//     //     error: true,
//     //     message: 'userId is not a Number'
//     // })

//     throw new Error("userId is not a Number", { cause: "userId is " + userId });
//     console.log("blocked.");
//   } else {
//     res.send({
//       error: false,
//       userId,
//       message: "userId is a Number",
//     });
//   }
// });

/* -------------------------------------------------------------------------- */
// TRY-CATCH:
// app.get("/user/:id", (req, res) => {
//   const userId = req.params.id;

//   try {
//     if (isNaN(userId)) {
//       throw new Error("userId is not a number");
//     } else {
//       res.send({
//         error: false,
//         message: "userId is a number",
//       });
//     }
//   } catch (err) {
//     // console.log(err)
//     // console.log('try-catch runned')
//     res.send({
//       error: true,
//       message: err.message,
//     });
//   }
// });

/* -------------------------------------------------------------------------- */
// // ASYNC:

// const asyncFunction = async () => {
//   throw new Error("Error on asyncFunciton");
// };

// app.get("/async", async (req, res, next) => {
//   //   await asyncFunction()
//   //     .then()
//   //     .catch((err) => console.log(err)); //! send error to console

// //   await asyncFunction().then().catch(next); //! send error errorHandler
// });

/* -------------------------------------------------------------------------- */
// npm i express-async-errors
require("express-async-errors");

app.get("/async", async (req, res, next) => {
  res.errorStatusCode = 501;
  throw new Error("Error on asyncFunction");
});

/* -------------------------------------------------------------------------- */
//? ERRORHANDLER
//? errorHandler sayfanın en altında yer almalı.

const errorHandler = (err, req, res, next) => {
  const errorStatusCode = res.errorStatusCode ?? 500;

  // console.log(err)
  // console.log('errorHandler runned.')

  res.status(errorStatusCode).send({
    error: true,
    message: err.message,
    cause: err.cause,
    // stack: err.stack
  });
};
//? for run errorHandler call in use.
//? It must be at last middleware.
app.use(errorHandler);

/* -------------------------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
