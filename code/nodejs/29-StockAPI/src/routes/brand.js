"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/brand:
const permission = require("../middlewares/permissions");
// const {isAdmin}=require('../middlewares/permissions')

const brand = require("../controllers/brand");

// URL: /brands

router
  .route("/")
  .get(permission.isStaff, brand.list)
  .post(permission.isAdmin, brand.create);

router
  .route("/:id")
  .get(permission.isStaff, brand.read)
  .put(permission.isAdmin, brand.update)
  .patch(permission.isAdmin, brand.update)
  .delete(permission.isAdmin, brand.delete);

/* ------------------------------------------------------- */
module.exports = router;
