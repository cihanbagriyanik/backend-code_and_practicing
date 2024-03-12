"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/user:

const user = require("../controllers/user");
const permission = require("../middlewares/permissions");

// URL: /users

router.route("/").get(permission.isAdmin, user.list).post(user.create);

router
  .route("/:id")
  .get(permission.isAdmin, user.read)
  .put(permission.isAdmin, user.update)
  .patch(permission.isAdmin, user.update)
  .delete(permission.isAdmin, user.delete);

/* ------------------------------------------------------- */
module.exports = router;
