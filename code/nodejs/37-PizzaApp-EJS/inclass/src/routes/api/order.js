"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/order:

const order = require('../../controllers/api/order')
const permissions = require('../../middlewares/permissions')

// URL: /orders

router.route('/')
    .get(permissions.isLogin, order.list)
    .post(permissions.isLogin, order.create)

router.route('/:id')
    .get(permissions.isLogin, order.read)
    .put(permissions.isLogin, order.update)
    .patch(permissions.isLogin, order.update)
    .delete(permissions.isLogin, order.delete)

/* ------------------------------------------------------- */
module.exports = router