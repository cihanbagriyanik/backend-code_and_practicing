"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | CLARUSWAY FullStack Team
----------------------------------------------------------------------------- */
//? Requaring
const router = require("express").Router();

const auth = require("../controllers/auth");

/* -------------------------------------------------------------------------- */
//! URL: /auth
router.post("/login", auth.login);

router.get("/logout", auth.logout);

/* -------------------------------------------------------------------------- */
module.exports = router;
