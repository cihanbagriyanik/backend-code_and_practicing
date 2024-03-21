"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/pizza:

const pizza = require('../../controllers/api/pizza')
const permissions = require('../../middlewares/permissions')

/* ------------------------------------------------------- */
// Multer (upload middleware)
// $ npm i multer
// https://expressjs.com/en/resources/middleware/multer.html

// const multer = require('multer')
// const upload = multer({
//     // dest: './uploads',
//     storage: multer.diskStorage({
//         destination: './uploads',
//         filename: function(req, file, returnCallback) {
//             // returnCallback(error, filename)
//             // console.log(file)
//             returnCallback(null, file.originalname)
//         }
//     })
// })

const upload = require('../../middlewares/upload')

/* ------------------------------------------------------- */

// URL: /pizzas

router.route('/')
    .get(pizza.list) // AllowAny
    // .post(permissions.isAdmin, upload.single('fileFieldName'),  pizza.create)
    .post(permissions.isAdmin, upload.array('fileFieldName'),  pizza.create) // Recommended.
    // .post(permissions.isAdmin, upload.any(),  pizza.create)

router.route('/:id')
    .get(pizza.read) // AllowAny
    .put(permissions.isAdmin, upload.single('image'),  pizza.update)
    .patch(permissions.isAdmin, upload.single('image'),  pizza.update)
    .delete(permissions.isAdmin, pizza.delete)

/* ------------------------------------------------------- */
module.exports = router