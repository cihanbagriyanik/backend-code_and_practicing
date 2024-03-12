"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/product:

const product = require('../controllers/product')
const permission=require('../middlewares/permissions')

// URL: /products

router.route('/')
    .get(product.list)
    .post(permission.isStaff, product.create)

router.route('/:id')
    .get(product.read)
    .put(permission.isStaff,product.update)
    .patch(permission.isStaff,product.update)
    .delete(permission.isStaff,product.delete)

/* ------------------------------------------------------- */
module.exports = router