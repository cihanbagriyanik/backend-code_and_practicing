"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
// Call Model:
const Todo = require("../models/todo");

/* -------------------------------------------------------------------------- */
// ROUTERS:
// const express = require("express");
// const router = express.Router();
const router = require("express").Router();
/* -------------------------------------------------------------------------- */
// List Todos
router.get("/", async (req, res) => {
  //   const data = await Todo.findAll();
  const data = await Todo.findAndCountAll();

  res.status(200).send({
    error: false,
    result: data,
  });
});

/* -------------------------------------------------------------------------- */
// Create Todo
router.post("/", async (req, res) => {
  //   const receivedData = req.body;
  //   console.log(receivedData);

  //   const data = await Todo.create({
  //     title: req.body.title,
  //     description: req.body.description,
  //     priorty: req.body.priorty,
  //     isDone: req.body.isDone,
  //   });
  const data = await Todo.create(req.body);

  res.status(201).send({
    error: false,
    body: req.body, // Send Data
    message: "Created",
    result: data, // Recived Data
  });
});

/* -------------------------------------------------------------------------- */
// Read Todo
router.get("/:id", async (req, res) => {
  // const data = await Todo.findOne({ where: { id: req.params.id } });
  // console.log(data);

  const data = await Todo.findByPk(req.params.id);

  res.status(200).send({
    error: false,
    result: data,
  });
});

/* -------------------------------------------------------------------------- */
// Update Todo
router.put("/:id", async (req, res) => {
  const data = await Todo.update(req.body, { where: { id: req.params.id } });

  res.status(202).send({
    error: false,
    body: req.body, // Send Data
    message: "Updated",
    result: data, // Recived Data
  });
});

/* -------------------------------------------------------------------------- */
// Delete Todo
router.delete("/:id", async (req, res) => {
  const data = await Todo.destroy({
    where: {
      id: req.params.id,
    },
  });

  if (data > 0) {
    //! 204 icerik kesinlikle dondurmuyor (204: No Content). Disallow Output
    // Exists: Deleted
    res.status(204).send({
      error: false,
      // message: "Deleted",
      // result: data, // Recived Data
    });
  } else {
    // Not Found
    res.status(404).send({
      error: false,
      message: "Not Found",
      result: data, // Recived Data
    });
  }
});

/* -------------------------------------------------------------------------- */
// Export:
module.exports = router;
