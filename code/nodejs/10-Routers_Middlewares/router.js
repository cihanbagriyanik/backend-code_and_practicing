"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//? "Router" is special app for URL control in ExpressJS.

// app.get('/', (req, res) => { res.send({ message: 'Home Page' }) })
// app.get('/about', (req, res) => { res.send({ message: 'About Page' }) })
// app.get('/user/:userId', (req, res) => { res.send({ message: 'User Page' })

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
