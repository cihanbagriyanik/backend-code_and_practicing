"use strict";
/* --------------------------------------------------------------------------
    * EXPRESS - Personnel API
----------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
// //? Require(import) Personnel:
const Personnel = require("../models/personnel.model");

/* -------------------------------------------------------------------------- */
//? Personnel Controller:
module.exports = {
  // GET:
  list: async (req, res) => {
    // const data = await Personnel.find(search).sort(sort).skip(skip).limit(limit)
    const data = await res.getModelList(Personnel);

    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(Personnel),
      data, // data: data
    });
  },

  // CRUD Processes:
  // POST
  create: async (req, res) => {
    const data = await Personnel.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  // /:id -> GET
  read: async (req, res) => {
    const data = await Personnel.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },

  // /:id -> PUT / PATCH
  update: async (req, res) => {
    const data = await Personnel.updateOne({ _id: req.params.id }, req.body);

    res.status(202).send({
      error: false,
      data,
      newData: await Personnel.findOne({ _id: req.params.id }),
    });
  },

  // /:id -> DELETE
  delete: async (req, res) => {
    const data = await Personnel.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });

    // const isDeleted = data.deletedCount >= 1 ? true : false;
    // res.status(isDeleted ? 204 : 404).send({
    //   error: !isDeleted,
    //   data,
    // });
  },
};
