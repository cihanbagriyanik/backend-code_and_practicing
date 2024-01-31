"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
// const express = require("express");
// // Send routings to Router
// const router = express.Router();

const router = require("express").Router();
/* -------------------------------------------------------------------------- */

// Routes:
router.get("/", (req, res) => {
  res.send({ message: "Home Page" });
});
router.get("/about", (req, res) => {
  res.send({ message: "About Page" });
});
router.get("/user/:userId", (req, res) => {
  res.send({ message: "User Page" });
});

module.exports = router;
