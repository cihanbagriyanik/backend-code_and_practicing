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
    /*
      #swagger.tags = ["Personnels"]
      #swagger.summary = "List Personnels"
      #swagger.description = `
          You can send query with endpoint for search[], sort[], page and limit.
          <ul> Examples:
              <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
              <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
              <li>URL/?<b>page=2&limit=1</b></li>
          </ul>
      `
    */
    const data = await res.getModelList(Personnel, {}, "departmentId");

    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(Personnel),
      data,
    });
  },

  // CRUD Processes:
  // POST
  create: async (req, res) => {
    /*
      #swagger.tags = ["Personnels"]
      #swagger.summary = "Create Personnel"
      #swagger.description = "Look to <b>'Models/Personnel'</b> for parameters."
      #swagger.parameters['body'] = {
          in: 'body',
          required: 'true',
          schema: {
              $ref: '#/definitions/Personnel'
          }
      }
    */
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
    /*
            #swagger.tags = ["Personnels"]
            #swagger.summary = "Get Single Personnel"
        */
    const data = await Personnel.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },

  // /:id -> PUT / PATCH
  update: async (req, res) => {
    /*
      #swagger.tags = ["Personnels"]
      #swagger.summary = "Update Personnel"
      #swagger.description = "Look to <b>'Models/Personnel'</b> for parameters."
      #swagger.parameters['body'] = {
          in: 'body',
          required: 'true',
          schema: {
              $ref: '#/definitions/Personnel'
          }
      }
    */
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
    /*
      #swagger.tags = ["Personnels"]
      #swagger.summary = "Delete Personnel"
    */
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
