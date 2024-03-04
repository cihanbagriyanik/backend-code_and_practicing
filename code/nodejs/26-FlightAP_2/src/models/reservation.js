"use strict";
/* -------------------------------------------------------
NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const { default: mongoose } = require("mongoose");

/* ------------------------------------------------------- *
/* ------------------------------------------------------- *
{
    "flightId": "65e1a360b61bc6d6865ec76a",
    "passengers": [
        "65e1a7b5d8904abdf59f0543",
        "65e1a7e0d8904abdf59f0549"
    ]
}
// reservation plus
/*
eğer verilen id ye ait bir yolcu var ise rezervasyona ekle
id ile değil ad soyad mail ile oluşturulmak isteniyor ise
    - bu maile ait yolcu var ise onun id sini al ekle
    - yok ise yolcuyu oluştur sonra id sini ekle
*/
/*
{
    "flightID": "65e1a360b61bc6d6865ec76a",
    "passengers": [
        "65e1a7b5d8904abdf59f0543",
        "65e1a7e0d8904abdf59f0549",
        {
            "firstName": "esra",
            "lastName": "eeeee",
            "email": "esra@site.com", 
        }
    ]
}
*/
/* ------------------------------------------------------- */

/* ------------------------------------------------------- */
// Reservation Model:

// const passwordEncrypt = require('../helpers/passwordEncrypt')

const ReservationSchema = new mongoose.Schema(
  {
    flightId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flight",
      required: true,
    },
    // passengers:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref : 'Passenger',
    //     required: true,
    // },

    passengers: [],

    createdId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      trim: true,
      required: true,
    },
  },
  { collection: "reservations", timestamps: true }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Reservation", ReservationSchema);
