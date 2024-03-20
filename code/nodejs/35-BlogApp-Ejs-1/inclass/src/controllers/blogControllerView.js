"use strict";
/*

BLOG api project MODELS

*/
// move to index.js:
// require('express-async-errors')

const { BlogCategory, BlogPost } = require("../models/blogModel");

/*
BLOG POST Controllers
*/

module.exports.BlogPost = {
  list: async (req, res) => {
    const data = await res.getModelList(BlogPost, "blogCategoryId");

    // console.log(req.query.filter);
    const categories = await BlogCategory.find();

    const recentPosts = await BlogPost.find()
      .sort({ createAt: "desc" })
      .limit(3);

    // res.status(200).send({
    //   error: false,
    //   details: await res.getModelListDetails(BlogPost),
    //   data: data,
    // });

    res.render("index", {
      posts: data,
      categories,
      selectedCategory: req?.query?.filter?.blogCategoryId,
      recentPosts
    });
  },

  create: async (req, res) => {
    //
    const data = await BlogPost.create(req.body);
    // console.log('*****');
    // console.log(req.body);
    res.status(200).send({
      error: false,
      body: req.body,
      data: data,
    });
  },
  read: async (req, res) => {
    //
    const data = await BlogPost.findOne({ _id: req.params.postId }).populate(
      "blogCategoryId"
    );
    res.status(200).send({
      error: false,
      data: data,
    });
  },
  update: async (req, res) => {
    //
    const data = await BlogPost.updateOne({ _id: req.params.postId }, req.body);

    res.status(200).send({
      error: false,
      data: data,
    });
  },
  delete: async (req, res) => {
    //
    const data = await BlogPost.deleteOne({ _id: req.params.postId });
    // console.log(data);
    res.status(data.deletedCount >= 1 ? 204 : 404).send({
      error: false,
    });
  },
};

/*
    BLOG CATEGORY Controllers
    */

module.exports.BlogCategory = {
  // GET
  list: async (req, res) => {
    // const data = await BlogCategory.find()
    const data = await res.getModelList(BlogCategory);

    res.status(200).send({
      error: false,
      data,
    });
  },

  // CRUD Processes:

  // POST
  create: async (req, res) => {
    const data = await BlogCategory.create(req.body);

    res.status(201).send({
      error: false,
      body: req.body,
      data,
    });
  },

  // /:categoryId -> GET
  read: async (req, res) => {
    const data = await BlogCategory.findOne({ _id: req.params.categoryId });

    res.status(200).send({
      error: false,
      data,
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
      body: req.body,
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
