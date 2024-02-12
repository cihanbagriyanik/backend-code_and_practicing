"use strict";

/* -------------------------------------------------------------------------- //

    BLOGAPP API Project INDEX.js

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//? Express Export
const express = require("express");
const app = express();

/* -------------------------------------------------------------------------- */
//? DOTENV Export
require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* -------------------------------------------------------------------------- */
//? DB CONNECTION
require("./src/configs/dbConnection");

/* -------------------------------------------------------------------------- */
//? JSON
app.use(express.json());

/* -------------------------------------------------------------------------- */
//? Express-async-errors import
require("express-async-errors");

/* -------------------------------------------------------------------------- */
//? HOME Page
app.all("/", (req, res) => {
  res.send("Welcome First Express Project");
});

/* -------------------------------------------------------------------------- */
//? ROUTES
// app.use("/user", require("./src/routers/userRouter"));
app.use("/blog", require("./src/routers/blogRouter"));

/* -------------------------------------------------------------------------- */
//? ERROR HANDLER
app.use(require("./src/middlewares/errorHandler"));

/* -------------------------------------------------------------------------- */
//? SYNCRONIZATION:
// require("./src/sync")();

/* -------------------------------------------------------------------------- */
app.listen(PORT, () => console.log("Running on http://127.0.0.1:" + PORT));
