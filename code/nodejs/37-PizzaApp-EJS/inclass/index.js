"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors morgan
    $ npm i jsonwebtoken
    $ npm i swagger-autogen swagger-ui-express redoc-express
    $ npm i nodemailer multer
    $ mkdir logs
    $ nodemon
*/
const express = require('express')
const app = express()

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require('dotenv').config()
const PORT = process.env?.PORT || 8000

// asyncErrors to errorHandler:
require('express-async-errors')
// let ejs = require('ejs') 
/* ------------------------------------------------------- */
// TEMPLATE:

app.set('views', './public')
app.set('view engine', 'ejs')

// < > % 
// ejs.delimiter = '?'; // % yerine ? kullan
// ejs.openDelimiter = '{'; // < yerine { kullan
// ejs.closeDelimiter = '}'; // > yerine } kullan

app.set('view options', {
    openDelimiter : '{',
    closeDelimiter:'}'
})

// Accept form data & convert to object:
app.use(express.urlencoded({ extended: true }))

// StaticFiles:
app.use('/assets', express.static('./public/assets'))
/* ------------------------------------------------------- */
//* Template içi cookie-session ekledik
// SessionCookies:
const session = require("cookie-session")
app.use(session({ secret: process.env.SECRET_KEY }))

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()



/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json())

// Check Token:
app.use(require('./src/middlewares/authentication'))

// morgan-logger:
app.use(require('./src/middlewares/logger'))

// res.getModelList:
app.use(require('./src/middlewares/findSearchSortPage'))


/* ------------------------------------------------------- */
// Routes: TEMPLATE + SESSION:

// HomePath:
app.all('/', (req, res) => {
    res.redirect('/pizzas')
})
// auth:
app.use('/auth', require('./src/routes/view/auth'))
// user:
app.use('/users', require('./src/routes/view/user'))
// order:
app.use('/orders', require('./src/routes/view/order'))
// pizza:
app.use('/pizzas', require('./src/routes/view/pizza'))
// topping:
app.use('/toppings', require('./src/routes/view/topping'))

/* ------------------------------------------------------- */
// Routes: API + JWT:

// HomePath:
app.all('/api', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to PIZZA API',
        isLogin: req.isLogin,
        user: req.user
    })
})
// auth:
app.use('/api/auth', require('./src/routes/api/auth'))
// user:
app.use('/api/users', require('./src/routes/api/user'))
// order:
app.use('/api/orders', require('./src/routes/api/order'))
// pizza:
app.use('/api/pizzas', require('./src/routes/api/pizza'))
// topping:
app.use('/api/toppings', require('./src/routes/api/topping'))

// document:
app.use('/api/documents', require('./src/routes/api/document'))

// static-files:
app.use('/images', express.static('./uploads'))

/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.