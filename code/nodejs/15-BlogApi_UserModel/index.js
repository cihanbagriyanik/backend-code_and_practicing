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
//? JSON
app.use(express.json()); //! KONUMA DIKKAT

/* -------------------------------------------------------------------------- */
//? HOME PAGE
app.all("/", (req, res) => {
  res.send("Welcome First ExpressJs Project with Mongo");
});

/* -------------------------------------------------------------------------- */
//? ROUTES
app.use("/blog", require("./src/routers/blogRouter"));

/* -------------------------------------------------------------------------- */
//? ERROR HANDLER:
app.use(require("./src/middlewares/errorHandler"));

/* -------------------------------------------------------------------------- */
app.listen(PORT, () => console.log("Running on http://127.0.0.1:" + PORT));
