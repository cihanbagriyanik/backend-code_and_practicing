"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
/* Response Methods */

//? SendStatus:
// app.get('/', (req, res) => res.sendStatus(404))
//? Status:
// app.get('/', (req, res) => res.status(200).send({ message: 'OK' }))
// app.post('/', (req, res) => res.status(201).send({ message: 'Created' }))
// app.put('/', (req, res) => res.status(202).send({ message: 'Accepted' }))
// app.delete('/', (req, res) => res.status(204).send({ message: 'No Content' }))
//? JSON (.send() method already does this converting.)
// app.get('/', (req, res) => res.json([{ key: 'value' }]))
//? Download File (Download at browser):
// app.get('/download', (req, res) => res.download('./download.js', 'anotherFile.js'))
//? SendFile Content:
// console.log( __dirname )
// app.get('/file', (req, res) => res.sendFile(__dirname + '/download.js')) // FilePath must be realPath
//? Redirect:
// app.get('/google', (req, res) => res.redirect(301, 'https://www.google.com')) // 301 or 302
// app.get('/redirect', (req, res) => res.redirect(302, '/thisPath'))

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
