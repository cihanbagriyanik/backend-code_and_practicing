"use strict";
/* --------------------------------------------------------------------------
    * EXPRESS - Personnel API
----------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
//? Require(import) Department:
const Department = require("../models/department.model");

/* -------------------------------------------------------------------------- */
//? Department Controller:
module.exports = {
  // GET:
  list: async (req, res) => {
    /*
      #swagger.tags = ["Departments"]
      #swagger.summary = "List Departments"
      #swagger.description = `
          You can send query with endpoint for search[], sort[], page and limit.
          <ul> Examples:
              <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
              <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
              <li>URL/?<b>page=2&limit=1</b></li>
          </ul>
      `
    */

    // const data = await Department.find(search).sort(sort).skip(skip).limit(limit)
    const data = await res.getModelList(Department);

    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(Department),
      data, // data: data
    });
  },

  // CRUD Processes:
  // POST
  create: async (req, res) => {
    /*
      #swagger.tags = ["Departments"]
      #swagger.summary = "Create Department"
      #swagger.parameters['body'] = {
          in: 'body',
          required: true,
          schema: {
              name: 'Test Department'
          }
      }
    */
    const data = await Department.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  // /:id -> GET
  read: async (req, res) => {
    /*
      #swagger.tags = ["Departments"]
      #swagger.summary = "Get Single Department"
    */
    const data = await Department.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },

  // /:id -> PUT / PATCH
  update: async (req, res) => {
    /*
      #swagger.tags = ["Departments"]
      #swagger.summary = "Update Department"
      #swagger.parameters['body'] = {
          in: 'body',
          required: true,
          schema: {
              name: 'Test Department'
          }
      }
    */
    const data = await Department.updateOne({ _id: req.params.id }, req.body);

    res.status(202).send({
      error: false,
      data,
      newData: await Department.findOne({ _id: req.params.id }),
    });
  },

  // /:id -> DELETE
  delete: async (req, res) => {
    /*
      #swagger.tags = ["Departments"]
      #swagger.summary = "Delete Department"
    */
    const data = await Department.deleteOne({ _id: req.params.id });

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

  personnels: async (req, res) => {
    const Personnel = require("../models/personnel.model");

    const data = await res.getModelList(
      Personnel,
      { departmentId: req.params.id },
      "departmentId"
    );

    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(
        Personnel,
        { departmentId: req.params.id },
        "departmentId"
      ),
      data,
    });
  },
};
