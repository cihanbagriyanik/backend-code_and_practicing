"use strict";
/* -------------------------------------------------------
    * BLOG API PROJECT
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* -------------------------------------------------------------------------- */
//? DB CONNECTION
require("./src/configs/dbConnection");

/* -------------------------------------------------------------------------- */
// SessionCookies:
// http://expressjs.com/en/resources/middleware/cookie-session.html
// https://www.npmjs.com/package/cookie-session
//* $ npm i cookie-session




/* -------------------------------------------------------------------------- */
//? JSON
app.use(express.json()); //! KONUMA DIKKAT

/* -------------------------------------------------------------------------- */
//? Express-async-errors import
require("express-async-errors");

/* -------------------------------------------------------------------------- */
//? HOME PAGE
app.all("/", (req, res) => {
  res.send("Welcome First ExpressJs Project with Mongo");
});

/* -------------------------------------------------------------------------- */
//? ROUTES
app.use("/user", require("./src/routers/userRouter"));
app.use("/blog", require("./src/routers/blogRouter"));

/* -------------------------------------------------------------------------- */
//? ERROR HANDLER:
app.use(require("./src/middlewares/errorHandler"));

/* -------------------------------------------------------------------------- */
//? SYNCRONIZATION:
// require("./src/sync")();

/* -------------------------------------------------------------------------- */
app.listen(PORT, () => console.log("Running on http://127.0.0.1:" + PORT));
