"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | CLARUSWAY FullStack Team
----------------------------------------------------------------------------- */
//? Requaring
const router = require("express").Router();

const topping = require("../controllers/topping");

/* -------------------------------------------------------------------------- */
//! URL: /toppings
router.route("/").get(topping.list).post(topping.create);

router
  .route("/:id")
  .get(topping.read)
  .put(topping.update)
  .patch(topping.update)
  .delete(topping.delete);

/* -------------------------------------------------------------------------- */
//? Export
module.exports = router;