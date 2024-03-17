"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *
{
    "username": "test",
    "password": "1234",
    "email": "test@site.com",
    "isActive": true,
    "isStaff": false,
    "isAdmin": false
}
/* ------------------------------------------------------- */
// User Model:

const passwordEncrypt = require("../helpers/passwordEncrypt");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      trim: true,
      required: true,
      // set: (password) => passwordEncrypt(password),
      // selected:false
    },

    email: {
      type: String,
      trim: true,
      required: [true, "Email field must be required"],
      unique: [true, "There is this email. Email field must be unique"],
      // validate: [
      //     (email) => email.includes('@') && email.includes('.'),
      //     'Email type is not correct.'
      // ]
      // email regex /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      // regexr.com for test

      // validate: [
      //     // (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email),
      //     // 'Email type is not correct.'
      //     (email) =>{
      //         const regexEmailCheck=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      //         return regexEmailCheck.test(email)
      //     },
      //     'Email type is not correct.'

      // ]
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    isStaff: {
      type: Boolean,
      default: false,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "users", timestamps: true }
);

// save: Only Create
UserSchema.pre(["save", "updateOne"], function (next) {
  // get data from "this" when create;
  // if process is updateOne, data will receive in "this._update"
  const data = this?._update || this;

  // const emailRegExp = new RegExp("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$")
  // const isEmailValidated = emailRegExp.test(data.email)
  // const isEmailValidated = RegExp("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$").test(data.email)
  const isEmailValidated = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    data.email
  ); // test from "data".

  if (isEmailValidated) {
    const isPasswordValidated =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&].{8,}$/.test(
        data.password
      );
    if (isPasswordValidated) {
      this.password = data.password = passwordEncrypt(data.password);

      this._update = data; // updateOne will wait data from "this._update".
      next(); // Allow to save.
    } else {
      next(new Error("Password not validated."));
    }
  } else {
    next(new Error("Email not validated."));
  }
});

module.exports = mongoose.model("User", UserSchema);
