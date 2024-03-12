"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
"use strict";

const Sale = require("../models/sale");
const Product = require("../models/product");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "List Sales"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
    const data = await res.getModelList(Sale);
    // res.status(200).send({
    //     error: false,
    //     details:await res.getModelListDetails(Sale),
    //     data
    // })

    //FOR REACT ?
    res.status(200).send({
      data,
    });
  },

  create: async (req, res) => {
    /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Create Sale"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/Sale' }
            }
        */

    const curentProduct = await Product.findOne({ _id: req.body.product_id });

    if (curentProduct.quantity >= req.body.quantity) {
      // crate sale process
      const data = await Sale.create(req.body);

      const updateProduct = await Product.updateOne(
        { _id: data.product_id },
        { $inc: { quantity: -data.quantity } }
      );
    } else {
      res.errorStatusCode = 422;
      throw new Error("not enogh stock");
    }

    const data = await Sale.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Get Single Sale"
        */
    const data = await Sale.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Update Sale"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/Sale' }
            }
        */
    if (req.body?.quantity) {
      // first get curentSale
      const curentSale = await Sale.findOne({ _id: req.params.id });

      // calculate diference
      const difquantity = req.body.quantity - curentSale.quantity;

      // update product's cuantity
      const updateProduct = await Product.updateOne(
        { _id: curentSale.product_id, quantity: { $gte: difquantity } },
        { $inc: { quantity: difquantity } }
      );

      if (updateProduct.modifiedCount == 0) {
        res.errorStatusCode = 422;
        throw new Error("not enogh stock");
      }

      const data = await Sale.updateOne({ _id: req.params.id }, req.body, {
        runValidators: true,
      });
      res.status(202).send({
        error: false,
        data,
        newdata: await Sale.findOne({ _id: req.params.id }),
      });
    }
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Delete Sale"
        */

    // first get curentSale
    const curentSale = await Sale.findOne({ _id: req.params.id });

    // delete curentSale
    const data = await Sale.deleteOne({ _id: req.params.id });

    // update product's cuantity
    const updateProduct = await Product.updateOne(
      { _id: curentSale.product_id },
      { $inc: { quantity: +curentSale.quantity } }
    );

    res.status(data.deletedCount ? 204 : 404).send({
      error: false,
      data,
    });
  },
};
