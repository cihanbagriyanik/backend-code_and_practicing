"use strict";
/* -------------------------------------------------------
    * USER MODEL
------------------------------------------------------- */

// require("express-async-errors");

const { User } = require("../models/userModel");
const passwordEncrypt = require("../helpers/passwordEncrypt");

module.exports.User = {
  // GET
  list: async (req, res) => {
    const data = await User.find();

    res.status(200).send({
      error: false,
      data,
    });
  },

  // CRUD Processes:

  // POST
  create: async (req, res) => {
    const data = await User.create(req.body);

    res.status(201).send({
      error: false,
      body: req.body,
      data,
    });
  },

  // /:userId -> GET
  read: async (req, res) => {
    const data = await User.findOne({ _id: req.params.userId });

    res.status(200).send({
      error: false,
      data,
    });
  },

  // /:userId -> PUT / PATCH
  update: async (req, res) => {
    const data = await User.updateOne({ _id: req.params.userId }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      body: req.body,
      // data: data,
      data,
      newData: await User.findOne({ _id: req.params.userId }),
    });
  },

  // /:userId -> DELETE
  delete: async (req, res) => {
    const data = await User.deleteOne({ _id: req.params.userId });

    res.status(data.deletedCount >= 1 ? 204 : 404).send({
      error: false,
      data,
    });
  },

  // Login / Logout Processes:
  login: async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
      const user = await User.findOne({ email: email });
      if (user && passwordEncrypt(password) == user.password) {
        // email & password true
        res.send({
          message: "Logined",
        });
      } else {
        res.errorStatusCode = 401;
        throw new Error("Login parameters are not true.");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Email and password are required.");
    }
  },

  logout: async (req, res) => {},
};
