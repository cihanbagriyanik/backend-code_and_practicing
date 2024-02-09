"use strict";
/* -------------------------------------------------------
    * BLOG API PROJECT (BLOG POST CONTROLLER)
------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//* Controllers

require("express-async-errors");

const { BlogPost } = require("../models/blogModel");

module.exports.BlogPost = {
  list: async (req, res) => {
    //
    res.status(200).send({
      error: false,
    });
  },

  create: async (req, res) => {
    //
    res.status(200).send({
      error: false,
    });
  },

  read: async (req, res) => {
    //
    res.status(200).send({
      error: false,
    });
  },

  update: async (req, res) => {
    //
    res.status(200).send({
      error: false,
    });
  },

  delete: async (req, res) => {
    //
    res.status(200).send({
      error: false,
    });
  },
};
