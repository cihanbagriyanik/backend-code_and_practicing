"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
// https://sequelize.org/docs/v6/getting-started/
const { Sequelize, DataTypes } = require("sequelize");
// DB Connection Configs:
// const sequelize = new Sequelize('sqlite:../../db.sqlite3')
const sequelize = new Sequelize("sqlite:" + process.env.SQLITE);
// Postgresql:
// $ npm i pg pg-hstore
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
/* ------------------------------------------------------- */
// MODELS:
// sequelize.define('tableName', { columns/fields })

// https://sequelize.org/docs/v7/models/data-types/
const Todo = sequelize.define("todos", {
  //? Not need define ID field, it will create auto.
  // id: {
  //     type: DataTypes.INTEGER,
  //     unique: true, // default: false
  //     allowNull: false, // default: true
  //     field: 'custom_column_name', // Change field name
  //     comment: "description",
  //     primaryKey: true, // default: false,
  //     autoIncrement: true, // id++ // default: false
  //     defaultValue: 0 // Set the value when if blank.
  // },

  title: {
    type: DataTypes.STRING(100), // VARCHAR(100)
    allowNull: false,
  },

  // description: {
  //     type: DataTypes.TEXT,
  // },
  description: DataTypes.TEXT, // ShortHand Using

  priority: {
    // -1: Low, 0: Normal, 1: High
    type: DataTypes.SMALLINT, // postgresql: SMALLINT
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

// Synchronization:
//! SYNC MUST RUN ONCE!
// sequelize.sync() // CREATE TABLE
// sequelize.sync({ force: true }) // DROP TABLE & CREATE TABLE // Data cleared.
// sequelize.sync({ alter: true }) // TO BACKUP & DROP & CREATE & FROM BACKUP // Recommended.

// Connection:
sequelize
  .authenticate()
  .then(() => console.log("* DB Connected *"))
  .catch(() => console.log("* DB Not Connected *"));

// Export:
module.exports = Todo;
