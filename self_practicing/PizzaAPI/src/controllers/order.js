"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | PizzaAPI
----------------------------------------------------------------------------- */
//? Requaring
const Order = require("../models/order");
const Pizza = require("../models/pizza");
const User = require("../models/user");
const sendMail = require("../helpers/sendMail");

/* -------------------------------------------------------------------------- */
//? Order Controller:
module.exports = {
  //! GET
  list: async (req, res) => {
    /*
        #swagger.tags = ["Orders"]
        #swagger.summary = "List Orders"
        #swagger.description = `
            You can send query with endpoint for search[], sort[], page and limit.
            <ul> Examples:
                <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                <li>URL/?<b>page=2&limit=1</b></li>
            </ul>
        `
    */

    const data = await res.getModelList(Order, [
      "userId",
      // "pizzaId",
      { path: "pizzaId", populate: "toppings" },
    ]);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Order),
      data,
    });
  },

  //* CRUD Processes:
  //! POST
  create: async (req, res) => {
    /*
        #swagger.tags = ["Orders"]
        #swagger.summary = "Create Order"
    */

    /* -------------------------------------------------------------------------- */
    //! Logined UserId:
    req.body.userId = req?.user._id;

    //!  Set default price from Pizza:
    if (!req.body?.price) {
      const pizza = await Pizza.findOne({ _id: req.body.pizzaId });
      req.body.price = pizza.price;
    }

    //! Calculate total Price:
    req.body.totalPrice = req.body.quantity * req.body.price;
    /* -------------------------------------------------------------------------- */

    const data = await Order.create(req.body);
    const dataUser = await User.findOne(data.userId);

    sendMail(
      // to:
      dataUser.email,
      // subject:
      "Thank you for your order",
      // Message:
      `
          <h1>Welcome to Pizza API</h1>
          <p>Dear <b>${dataUser.username}</b>, we will deliver you pizza in 30 min.</p>
      `
    );

    res.status(201).send({
      error: false,
      data,
    });
  },

  //! /:id -> GET
  read: async (req, res) => {
    /*
        #swagger.tags = ["Orders"]
        #swagger.summary = "Get Single Order"
    */

    const data = await Order.findOne({ _id: req.params.id }).populate([
      "userId",
      // "pizzaId",
      { path: "pizzaId", populate: "toppings" },
    ]);

    res.status(200).send({
      error: false,
      data,
    });
  },

  //! /:id -> PUT / PATCH
  update: async (req, res) => {
    /*
        #swagger.tags = ["Orders"]
        #swagger.summary = "Update Order"
    */

    const data = await Order.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      data,
      new: await Order.findOne({ _id: req.params.id }),
    });
  },

  //! /:id -> DELETE
  delete: async (req, res) => {
    /*
        #swagger.tags = ["Orders"]
        #swagger.summary = "Delete Order"
    */

    const data = await Order.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
