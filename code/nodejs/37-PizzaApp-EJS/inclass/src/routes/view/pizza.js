"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/pizza:

const permissions = require('../../middlewares/permissions')
const pizza = require('../../controllers/view/pizza')
const upload = require('../../middlewares/upload')
// URL: /pizzas

router.all('/', pizza.list)
router.all('/create', permissions.isAdmin,upload.single('image'), pizza.create)
router.all('/:id', permissions.isAdmin, pizza.read)
router.all('/:id/update', permissions.isAdmin,upload.single('image'), pizza.update)
router.all('/:id/delete', permissions.isAdmin, pizza.delete)

router.all('/:id/pushToppings', permissions.isAdmin, pizza.pushToppings)
router.all('/:id/pullToppings', permissions.isAdmin, pizza.pullToppings)

/* ------------------------------------------------------- */
module.exports = router