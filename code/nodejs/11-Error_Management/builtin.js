"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Built-In Middlewares:

//* Data Receiving:
//? Accept JSON (and convert to Object):
app.use(express.json());
//? Accept TEXT (and convert to Object):
app.use(express.text());
//? Accept Form-Data (and convert to Object):
// extended must be define. (if true, it supported nested form-data.)
app.use(express.urlencoded({ extended: true }));

//? receive sent-data with req.body:
app.all("/", (req, res) => {
  res.send({
    received: true,
    body: req.body,
  });
});

//? Call staticFiles from realPath:
// app.use('/files', express.static('./files'))
app.use("/img", express.static("./files"));

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
