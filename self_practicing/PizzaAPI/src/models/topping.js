"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | CLARUSWAY FullStack Team
----------------------------------------------------------------------------- */
//? Requaring
const { mongoose } = require("../configs/dbConnection");

/* -------------------------------------------------------------------------- */
// {
//     "name": "Sucuk"
// }
/* -------------------------------------------------------------------------- */
//? Topping Model:
const ToppingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
  },
  {
    collection: "toppings", // db tane name
    timestamps: true, // createdAt $ updatedAt
  }
);

/* -------------------------------------------------------------------------- */
module.exports = mongoose.model("Topping", ToppingSchema);
