"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    "name": "Brand 1"
}
/* ------------------------------------------------------- */
// Brand Model:

const BrandSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    image: { // URL
        type: String,
        trim: true
    }

}, { collection: 'brands', timestamps: true })
module.exports = mongoose.model('Brand', BrandSchema)
