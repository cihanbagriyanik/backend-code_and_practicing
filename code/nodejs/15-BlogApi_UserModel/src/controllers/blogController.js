"use strict";
/* -------------------------------------------------------
    * BLOG API PROJECT (BLOG POST CONTROLLER)
------------------------------------------------------- */

/* -------------------------------------------------------------------------- */

// require("express-async-errors");

const { BlogPost, BlogCategory } = require("../models/blogModel");

/* -------------------------------------------------------------------------- */
//? Blog Category CONTROLLER
module.exports.BlogCategory = {
  // GET
  list: async (req, res) => {
    const data = await BlogCategory.find();

    res.status(200).send({
      error: false,
      data: data,
    });
  },

  // CRUD Processes:
  // POST
  create: async (req, res) => {
    const data = await BlogCategory.create(req.body);

    res.status(201).send({
      error: false,
      body: req.body,
      data: data,
    });
  },

  // /:categoryId -> GET
  read: async (req, res) => {
    const data = await BlogCategory.findOne({ _id: req.params.categoryId });

    res.status(200).send({
      error: false,
      data: data,
    });
  },

  // /:categoryId -> PUT / PATCH
  update: async (req, res) => {
    const data = await BlogCategory.updateOne(
      { _id: req.params.categoryId },
      req.body
    );

    res.status(202).send({
      error: false,
      // data: data,
      data,
      newData: await BlogCategory.findOne({ _id: req.params.categoryId }),
    });
  },

  // /:categoryId -> DELETE
  delete: async (req, res) => {
    const data = await BlogCategory.deleteOne({ _id: req.params.categoryId });

    res.status(data.deletedCount >= 1 ? 204 : 404).send({
      error: false,
      data,
    });
  },
};

/* -------------------------------------------------------------------------- */
//? BLOG POST CONTROLLER
module.exports.BlogPost = {
  list: async (req, res) => {
    const data = await BlogPost.find().populate("blogCategoryId");

    res.status(200).send({
      error: false,
      data: data,
    });
  },

  // CRUD
  create: async (req, res) => {
    const data = await BlogPost.create(req.body);

    res.status(201).send({
      error: false,
      body: req.body,
      data: data,
    });
  },

  read: async (req, res) => {
    const data = await BlogPost.findOne({ _id: req.params.postId }).populate(
      "blogCategoryId"
    );

    res.status(200).send({
      error: false,
      data: data,
    });
  },

  update: async (req, res) => {
    const data = await BlogPost.updateOne({ _id: req.params.postId }, req.body);

    res.status(202).send({
      error: false,
      data: data,
    });
  },

  delete: async (req, res) => {
    const data = await BlogPost.deleteOne({ _id: req.params.postId });
    // console.log(data);

    res.status(data.deletedCount >= 1 ? 204 : 404).send({
      error: false,
    });
  },
};
