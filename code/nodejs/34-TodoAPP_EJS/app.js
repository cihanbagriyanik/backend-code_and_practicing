"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

// TEMPLATE

// https://expressjs.com/en/guide/using-template-engines.html
// https://ejs.co/
// https://www.npmjs.com/package/ejs
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

// npm i ejs

// console.log(app)

// set template engine
app.set('view engine','ejs')  
// default folder './views' //! klasor app.js /index.js ile aynı dizinde olmalı 
app.set('views','public')
/* ------------------------------------------------------- */
// Accept json data & convert to object:
app.use(express.json())

// Accept form data & convert to object:
// app.use(express.urlencoded())
app.use(express.urlencoded({extended:true} ))

// Router:

app.all('/',(req,res)=>{
    // res.render('index.ejs')
    res.render('index')


})
app.use('/api',require('./app/routes/todo'))
app.use('/view',require('./app/routes/todoTemplate'))

// DatabaseConnection:
const { dbConnection } = require('./app/dbConnection')
dbConnection() // sequelize.sync() must run after model defines.

// errorHandler (Catch Errors):
app.use(require('./app/errorHandler'))

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));