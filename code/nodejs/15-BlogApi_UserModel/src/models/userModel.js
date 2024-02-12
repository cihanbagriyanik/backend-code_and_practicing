"use strict";
/* -------------------------------------------------------
    * USER MODEL
------------------------------------------------------- */

const mongoose = require("mongoose");

// Schema:
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      unique: true,
      //   required: true,
      required: [true, "Email field required."],
      //   validate: (email) => { return true },
      //   validate: [
      //     (email) => {
      //       if (email.includes("@") && email.includes(".")) {
      //         return true;
      //       } else {
      //         return false;
      //       }
      //     },
      //     "Email type is incorrect.",
      //   ],
      validate: [
        (email) => email.includes("@") && email.includes("."),
        "Email type is incorrect",
      ],
    },

    password: {
      type: String,
      trim: true,
      required: true,
    },
    firstName: String,
    lastName: String,
  },

  {
    collection: "users",
    timestamps: true,
  }
);

// Export
module.exports = {
  User: mongoose.model("User", UserSchema),
};
