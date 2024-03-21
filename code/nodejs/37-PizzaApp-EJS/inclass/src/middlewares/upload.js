"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Middleware: upload

// Multer (upload middleware)
// $ npm i multer
// https://expressjs.com/en/resources/middleware/multer.html

const multer = require('multer')

module.exports = multer({
    // dest: './uploads',
    storage: multer.diskStorage({
        destination: './uploads',
        filename: function(req, file, returnCallback) {
            // returnCallback(error, filename)
            // console.log(file)
            returnCallback(null, file.originalname)
        }
    })
})