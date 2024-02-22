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
    const data = await res.getModelList(Personnel, {}, "departmentId");

    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(Personnel),
      data, // data: data
    });
  },

  // CRUD Processes:
  // POST
  create: async (req, res) => {
    //? isLead Control:
    const isLead = req.body?.isLead || false;
    if (isLead) {
      const xyz = await Personnel.updateMany(
        { departmentId: req.body.departmentId, isLead: true },
        { isLead: false }
      );
    }

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
    // isLead Control:
    const isLead = req.body?.isLead || false;
    if (isLead) {
      const { departmentId } = await Personnel.findOne(
        { _id: req.params.id },
        { departmentId: 1 }
      );
      await Personnel.updateMany(
        { departmentId, isLead: true },
        { isLead: false }
      );
    }

    const data = await Personnel.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });
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
