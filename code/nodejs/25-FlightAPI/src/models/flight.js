"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { default: mongoose } = require("mongoose");

/* ------------------------------------------------------- *
{
    "flightNumber": "TK 101",
    "airline": "THY",
    "departure": "ISTANBUL",
    "departureDate": "2024-04-02 21:00:00",
    "arrival": "BERLIN",
    "arrivalDate": "2024-04-02 22:00:00",
    "createdId": "65e1936b5a6e353e08758da6"
}
{
    "flightNumber": "LFT 102",
    "airline": "LUFTHANSA",
    "departure": "BERLIN",
    "departureDate": "2024-06-05 11:00:00",
    "arrival": "PARIS",
    "arrivalDate": "2024-06-05 13:00:00",
    "createdId": "65e1936b5a6e353e08758da6"
}
/* ------------------------------------------------------- */
// Fligt Model:

// const passwordEncrypt = require('../helpers/passwordEncrypt')

const FlightSchema = new mongoose.Schema(
  {
    flightNumber: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    airline: {
      type: String, // type: mongoose.Schema.Types.ObjectId, ref : 'Airline'
      trim: true,
      required: true,
    },
    departure: {
      type: String, // type: mongoose.Schema.Types.ObjectId, ref : 'City'
      trim: true,
      required: true,
    },
    departureDate: {
      type: Date,
      required: true,
    },
    arrival: {
      type: String, // type: mongoose.Schema.Types.ObjectId, ref : 'City'
      trim: true,
      required: true,
    },
    arrivalDate: {
      type: Date,
      required: true,
    },
    createdId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      trim: true,
      required: true,
    },
  },
  { collection: "flights", timestamps: true }
);
/* -------------------------------------------------------------------------- */
// mongoose middleware
const dateToLocaleString = require("../helpers/dateToLocaleString");
// pre ,init, pre save,postsave ...
FlightSchema.pre("init", function (document) {
  // document.extra="deneme"
  // document.departureDateStr=document.departureDate.toLocaleString('tr-tr',{dataStyle:'full',timeStyle:'medium'})
  document.departureDateStr = dateToLocaleString(document.departureDate);
  document.arrivalDateStr = dateToLocaleString(document.arrivalDate);
  document.__v = undefined; // görünümden kaldırır
});

/* ------------------------------------------------------- */
module.exports = mongoose.model("Flight", FlightSchema);
