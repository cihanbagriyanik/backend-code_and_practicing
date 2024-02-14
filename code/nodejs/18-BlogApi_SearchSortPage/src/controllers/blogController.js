"use strict";
/* -------------------------------------------------------
    * BLOG API PROJECT (BLOG POST and CATEGORY CONTROLLER)
------------------------------------------------------- */

/* -------------------------------------------------------------------------- */

// require("express-async-errors");

const { BlogPost, BlogCategory } = require("../models/blogModel");

/* -------------------------------------------------------------------------- */
//? Blog Category CONTROLLER
module.exports.BlogCategory = {
  // GET
  list: async (req, res) => {
    // const data = await BlogCategory.find();
    const data = await res.getModelList(BlogCategory);

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
    // /* //todo -------------- FILTERING & SEARCHING & SORTING & PAGINATION ---------------------------- */
    // // console.log(req.query);

    // //* Filtering:
    // // URL?filter[key1]=value1&filter[key2]=value2
    // const filter = req.query?.filter || {};
    // console.log(filter);

    // //* Searching:
    // // URL?search[key1]=value1&search[key2]=value2
    // // https://www.mongodb.com/docs/manual/reference/operator/query/regex/
    // const search = req.query?.search || {};
    // // console.log(search);

    // // const example = { title: { $regex: "test", $options: "i" } }; // const example = { title: /test/ }
    // for (let key in search) {
    //   search[key] = { $regex: search[key], $options: "i" }; // i: case insensitive // Ignore the Case Sensitive
    // }
    // // console.log(search);

    // //* Sorting:
    // // URL?sort[key1]=asc&sort[key2]=desc
    // // asc: A-Z - desc: Z-A
    // const sort = req.query?.sort || {};
    // // console.log(sort);

    // //* PAGINATION:
    // // URL?page=3&limit=10
    // let limit = Number(req.query?.limit);
    // // console.log(limit);

    // // limit = limit > 0 ? limit : Number(process.env.PAGE_SIZE || 20);
    // // console.log(typeof limit, limit);

    // let page = Number(req.query?.page);
    // page = page > 0 ? page - 1 : 0; // Backend'de sayfa sayısı her zaman (page - 1)'dir.
    // // console.log(typeof page, page)

    // let skip = Number(req.query?.skip);
    // skip = skip > 0 ? skip : page * limit;
    // // console.log(typeof skip, skip);

    // /* //todo -------------- FILTERING & SEARCHING & SORTING & PAGINATION -------------- */

    // const data = await BlogPost.find({ ...filter, ...search })
    //   .sort(sort)
    //   .skip(skip)
    //   .limit(limit);
    // const data = await BlogPost.find().populate("blogCategoryId");

    const data = await res.getModelList(BlogPost, 'blogCategoryId')

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(BlogPost),
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
