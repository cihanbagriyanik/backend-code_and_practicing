"use strict";

/* -------------------------------------------------------------------------- //
    *BLOGAPP API Project USER MODELS
/* -------------------------------------------------------------------------- */

// IMPORT Mongoose
const mongoose = require("mongoose");

/* -------------------------------------------------------------------------- */
//? Password Encrypt:
const passwordEncrypt = require("../helpers/passwordEncrypt");

//? Password Validation:
const validatePassword = (password) => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
};

/* -------------------------------------------------------------------------- */
// Schema:
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email field required."],
      validate: [
        (email) => email.includes("@") && email.includes("."),
        "Email type is NOT correct",
      ],
    },

    password: {
      type: String,
      trim: true,
      required: true,
      validate: [
        {
          validator: validatePassword,
          message:
            "Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.",
        },
      ],
      set: (password) => {
        passwordEncrypt(password);
      },
    },

    firstName: {
      type: String,
      trim: true,
    },

    lastName: {
      type: String,
      trim: true,
    },
  },

  {
    collection: "users",
    timestamps: true,
  }
);

/* -------------------------------------------------------------------------- */
// Export
module.exports = {
  User: mongoose.model("User", UserSchema),
};
