"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/purchase:

const purchase = require("../controllers/purchase");
const permission = require("../middlewares/permissions");
// URL: /purchases

router
  .route("/")
  .get(permission.isStaff, purchase.list)
  .post(permission.isStaff, purchase.create);

router
  .route("/:id")
  .get(permission.isStaff, purchase.read)
  .put(permission.isStaff, purchase.update)
  .patch(permission.isStaff, purchase.update)
  .delete(permission.isStaff, purchase.delete);

/* ------------------------------------------------------- */
module.exports = router;
