"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* -------------------------------------------------------------------------- */
// Accept json data:
app.use(express.json());

app.all("/", (req, res) => {
  res.send("WELCOME TO TODO API");
});
/* -------------------------------------------------------------------------- */
// https://sequelize.org/docs/v6/getting-started/

const { Sequelize, DataTypes } = require("sequelize");

// DB Connection:
// const sequelize = new Sequelize("sqlite:./db.sqlite3")
const sequelize = new Sequelize(
  "sqlite:" + process.env.SQLITE || "./db.sqlite3"
);

// PostgreSQL:
// $ npm i pg pg-hstore
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

/* -------------------------------------------------------------------------- */
// MODELS:
// sequelize.define(' tableName ', { colums / fields })

// https://sequelize.org/docs/v7/models/data-types/
const Todo = sequelize.define("todos", {
  //? NOT need define ID field, it will create auto.
  //   id: {
  type: DataTypes.INTEGER,
  //     unique: true, // default: false
  //     allowNull: false, // default: true
  //     field: 'custom_column_name', // Change field name
  //     comment: "description",
  //     primaryKey: true, // default: false,
  //     autoIncrement: true, // id++ // default: false
  //     defaultValue: 0 // Set the value when if blank.
  //   },

  title: {
    type: DataTypes.STRING(100), // VARCHAR( 100 )
    allowNull: false,
  },

  description: DataTypes.TEXT, // ShortHand USING
  //   description: {
  //     type: DataTypes.TEXT,
  //   },

  priorty: {
    // -1: low, 0: Normal, 1: High
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
  },

  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },

  //? Not need define "createdAt" & "updatedAt" fields.
  // createdAt: false, // Unset
  // updatedAt: false, // Unset
});

/* -------------------------------------------------------------------------- */
// SYNCHRONIZATION:
//! SYNC MUST RUN ONCE!
// sequelize.sync() // CREATE TABLE
// sequelize.sync({ force: true }) // DROP TABLE & CREATE TABLE // Data cleared.
// sequelize.sync({ alter: true }) // TO BACKUP & DROP & CREATE & FROM BACKUP // Recommended.
/* -------------------------------------------------------------------------- */
// CONNECTION:
sequelize
  .authenticate()
  .then(() => console.log("DB Connected *"))
  .catch(() => console.log("DB NOT Connected *"));
/* -------------------------------------------------------------------------- */
// CONTROLLERS:

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
const errorHandler = (err, req, res, next) => {
  const errorStatusCode = res.errorStatusCode ?? 500;
  //   console.log("errorHandler runned.");
  res.status(errorStatusCode).send({
    error: true, // special data
    message: err.message, // error string message
    cause: err.cause, // error option cause
    // stack: err.stack, // error details
  });
};
app.use(errorHandler);
/* -------------------------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
