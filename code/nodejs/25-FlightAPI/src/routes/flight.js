"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/flight:

const permissions = require("../middlewares/permissions");
const flight = require("../controllers/flight");

// URL: /flights

router
  .route("/")
  .get(flight.list)
  .post(permissions.isStaffOrisAdmin, flight.create);

router
  .route("/:id")
  .get(flight.read)
  .put(permissions.isStaffOrisAdmin, flight.update)
  .patch(permissions.isStaffOrisAdmin, flight.update)
  .delete(permissions.isStaffOrisAdmin, flight.delete);

/* ------------------------------------------------------- */
module.exports = router;
