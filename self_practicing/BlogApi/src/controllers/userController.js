"use strict";

/* -------------------------------------------------------
    * BLOG API PROJECT (USER CONTROLLER)
------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
// IMPORT User from UserModel:
const { User } = require("../models/userModel");

/* -------------------------------------------------------------------------- */
//? Blog USER CONTROLLER
module.exports.User = {
  //! GET
  list: async (req, res) => {
    const data = await User.find();

    res.status(200).send({
      error: false,
      data: data,
    });
  },

  //* CRUD Processes:
  //! POST
  create: async (req, res) => {
    const data = await User.create(req.body);

    res.status(201).send({
      error: false,
      body: req.body,
      data: data,
    });
  },

  //! /:userId -> GET
  read: async (req, res) => {
    const data = await User.findOne({ _id: req.params.userId });

    res.status(200).send({
      error: false,
      data: data,
    });
  },

  //! /:userId -> PUT / PATCH
  update: async (req, res) => {
    const data = await User.updateOne({ _id: req.params.userId }, req.body);

    res.status(202).send({
      error: false,
      // data: data,
      data,
      newData: await User.findOne({ _id: req.params.userId }),
    });
  },

  //! /:userId -> DELETE
  delete: async (req, res) => {
    const data = await User.deleteOne({ _id: req.params.userId });

    res.status(data.deletedCount >= 1 ? 204 : 404).send({
      error: false,
      data,
    });
  },
};
