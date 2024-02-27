"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | CLARUSWAY FullStack Team
----------------------------------------------------------------------------- */
//? Requaring
const router = require("express").Router();

const token = require("../controllers/token");

const { isAdmin } = require("../middlewares/permissions");

/* -------------------------------------------------------------------------- */
//! URL: /tokens
router.use(isAdmin);

router.route("/").get(token.list).post(token.create);

router
  .route("/:id")
  .get(token.read)
  .delete(token.delete);
/* -------------------------------------------------------------------------- */
module.exports = router;
