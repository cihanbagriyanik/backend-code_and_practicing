"use strict";
/* -------------------------------------------------------------------------
    * NODEJS EXPRESS | PizzaAPI
---------------------------------------------------------------------------- */
//? Requaring
const router = require("express").Router();

const pizza = require("../controllers/pizza");

const permissions = require("../middlewares/permissions");

/* -------------------------------------------------------------------------- */
//! URL: /pizzas
router.route("/").get(pizza.list).post(permissions.isAdmin, pizza.create);

router
  .route("/:id")
  .get(pizza.read)
  .put(permissions.isLogin, pizza.update)
  .patch(permissions.isLogin, pizza.update)
  .delete(permissions.isLogin, pizza.delete);

/* -------------------------------------------------------------------------- */
module.exports = router;
