"use strict";

/* -------------------------------------------------------------------------- //
    *BLOGAPP API Project USER MODELS
/* -------------------------------------------------------------------------- */

// IMPORT Mongoose
const mongoose = require("mongoose");

/* -------------------------------------------------------------------------- */
//? Password Encrypt:
const passwordEncrypt = require("../helpers/passwordEncrypt");

/* -------------------------------------------------------------------------- */
// Schema:
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      // unique: [true, "There is this email. Email field must be unique."],
      required: [true, "Email field required."],
      validate: [
        (email) => {
          const emailRegexCheck =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return emailRegexCheck.test(email);
        },
        "Email type is not correct.",
      ],
    },

    password: {
      type: String,
      trim: true,
      required: true,
      validate: [
        (password) => {
          const passwordRegexCheck =
            // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
          return passwordRegexCheck.test(password);
        },
        //! -------------------------------------------------------------------------- DEGISEBILIR DIKKAT REGEXE GORE */
        "Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.",
      ],
      set: (password) => {
        return passwordEncrypt(password);
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
/* -------------------------------------------------------------------------- */
