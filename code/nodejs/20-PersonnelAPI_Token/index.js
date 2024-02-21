"use strict";
/* --------------------------------------------------------------------------
    * EXPRESS - Personnel API
----------------------------------------------------------------------------- */
/*
    $ npm i express dotenv mongoose express-async-errors
    $ npm i cookie-session
    $ npm i jsonwebtoken
*/

const express = require("express");
const app = express();

require("dotenv").config();

/* -------------------------------------------------------------------------- */
// * Required Modules:
//? envVariables to process.env:
const PORT = process.env.PORT || 8000;

//? asyncErrors to errorHandler:
require("express-async-errors");

/* -------------------------------------------------------------------------- */
//? Configrations:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* -------------------------------------------------------------------------- */
//? Middlerware:
// Accept JSON:
app.use(express.json());

// SessionsCookies:
app.use(
  require("cookie-session")({
    secret: process.env.SECRET_KEY || "write_random_chars_in_here",
  })
);

// res.getModelList():
app.use(require("./src/middlewares/findSearchSortPage"));

/* -------------------------------------------------------------------------- */
//? Routes:
// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PERSONNEL API", // INSIDE OBJE
  });
});

//* /authentication
app.use(require("./src/middlewares/authentication"));

//* /departments
app.use("/departments", require("./src/routes/department.router"));

//* /personnels
app.use("/personnels", require("./src/routes/personnel.router"));

//* /tokens
app.use("/tokens", require("./src/routes/token.router"));

//* /auth
app.use("/auth", require("./src/routes/auth.router"));

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//? errorHandler:
app.use(require("./src/middlewares/errorHandler"));

/* -------------------------------------------------------------------------- */
//? RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* -------------------------------------------------------------------------- */
//? Syncronization (must be in commentLine):
// require('./src/helpers/sync')()
