"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *
{
    "firstName": "cihan",
    "lastName": "cccccc",
    "gender": "M",
    "email": "cihan@site.com",
    "createdId": "65e1936b5a6e353e08758da6"
    
}
{
    "firstName": "esra",
    "lastName": "eeeee",
    "gender": "F",
    "email": "esra@site.com",
    "createdId": "65e1936b5a6e353e08758da6"
    
}
{
    "firstName": "omer",
    "lastName": "ooooooo",
    "gender": "M",
    "email": "omer@site.com",
    "createdId": "65e1936b5a6e353e08758da6"
    
}
/* ------------------------------------------------------- */
// Passenger Model:

const PassengerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    gender: {
      type: String,
      enum: ["M", "F", null],
      default: null,
    },

    email: {
      type: String,
      trim: true,
      required: [true, "Email field must be required"],
      unique: [true, "There is this email. Email field must be unique"],

      validate: [
        (email) => {
          const regexEmailCheck =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return regexEmailCheck.test(email);
        },
        "Email type is not correct.",
      ],
    },

    createdId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      trim: true,
      required: true,
    },
  },
  { collection: "passengers", timestamps: true }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Passenger", PassengerSchema);
