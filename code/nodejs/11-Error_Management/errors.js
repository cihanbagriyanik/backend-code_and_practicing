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

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;

  try {
    if (isNaN(userId)) {
      throw new Error("userId is not a number");
    } else {
      res.send({
        error: false,
        message: "userId is a number",
      });
    }
  } catch (err) {
    // console.log(err)
    // console.log('try-catch runned')
    res.send({
      error: true,
      message: err.message,
    });
  }
});

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
