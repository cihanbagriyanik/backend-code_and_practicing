"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/passenger:

const permissions = require("../middlewares/permissions");
const passenger = require("../controllers/passenger");

// URL: /passengers

// const { isStaffOrisAdmin } = require('../middlewares/permissions')
// router.use(isStaffOrisAdmin)
router
  .route("/")
  .get(permissions.isStaffOrisAdmin, passenger.list)
  .post(permissions.isStaffOrisAdmin, passenger.create);

router
  .route("/:id")
  .get(permissions.isStaffOrisAdmin, passenger.read)
  .put(permissions.isStaffOrisAdmin, passenger.update)
  .patch(permissions.isStaffOrisAdmin, passenger.update)
  .delete(permissions.isStaffOrisAdmin, passenger.delete);

/* ------------------------------------------------------- */
module.exports = router;
