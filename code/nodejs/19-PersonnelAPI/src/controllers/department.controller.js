// "use strict";
// /* --------------------------------------------------------------------------
//     * EXPRESS - Personnel API
// ----------------------------------------------------------------------------- */
// /* -------------------------------------------------------------------------- */
// //? Require(import) Department:
// const { Department } = require("../models/department.model");
// /* -------------------------------------------------------------------------- */
// //? Department Controller:
// module.exports = {
//   // GET:
//   list: async (req, res) => {
//     const data = await res.getModelList(Department);

//     res.status(200).send({
//       error: false,
//       detail: await res.getModelListDetails(Department),
//       data, // data: data,
//     });
//   },

//   // CRUD Processes:
//   // POST
//   creat: async (req, res) => {
//     const data = await Department.create(req.body);

//     res.status(201).send({
//       error: false,
//       data,
//     });
//   },

//   // /:id -> GET
//   read: async (req, res) => {
//     const data = await Department.findOne({ _id: req.params.id });

//     res.status(200).send({
//       error: false,
//       data,
//     });
//   },

//   // /:id -> PUT / PATCH
//   update: async (req, res) => {
//     const data = await Department.updateOne({ _id: req.params.id }, req.body);

//     res.status(202).send({
//       error: false,
//       data,
//       newData: await Department.findOne({ _id: req.params.id }),
//     });
//   },

//   // /:id -> DELETE
//   delete: async (req, res) => {
//     const data = await Department.deleteOne({ _id: req.params.id });

//     res.status(data.deletedCount ? 204 : 404).send({
//       error: !data.deletedCount,
//       data,
//     });

//     // const isDeleted = data.deletedCount >= 1 ? true : false;
//     // res.status(isDeleted ? 204 : 404).send({
//     //   error: !isDeleted,
//     //   data,
//     // });
//   },
// };
// /* -------------------------------------------------------------------------- */

"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Department = require("../models/department.model");

module.exports = {
  list: async (req, res) => {
    // const data = await Department.find(search).sort(sort).skip(skip).limit(limit)
    const data = await res.getModelList(Department);

    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(Department),
      data, // data: data
    });
  },

  create: async (req, res) => {
    const data = await Department.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    const data = await Department.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    const data = await Department.updateOne({ _id: req.params.id }, req.body);

    res.status(202).send({
      error: false,
      data,
      new: await Department.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
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
};