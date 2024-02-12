"use strict";
/* -------------------------------------------------------
    * USER MODEL
------------------------------------------------------- */

const mongoose = require("mongoose");

/* -------------------------------------------------------------------------- */
//? Password Encrypt:
// // https://nodejs.org/api/crypto.html#cryptopbkdf2syncpassword-salt-iterations-keylen-digest
// const crypto = require("node:crypto");

// // const keyCode = "write_random_chars_in_here";
// const keyCode = process.env.SECRET_KEY || "write_random_chars_in_here";
// const loopCount = 10_000;
// const charCount = 32; // write 32 for 64
// const encType = "sha512";

// const passwordEncrypt = function (password) {
//   return crypto
//     .pbkdf2Sync(password, keyCode, loopCount, charCount, encType)
//     .toString("hex");
// };

const passwordEncrypt = require("../helpers/passwordEncrypt");

/* -------------------------------------------------------------------------- */

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
      set: (password) => {
        passwordEncrypt(password);
      },
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
