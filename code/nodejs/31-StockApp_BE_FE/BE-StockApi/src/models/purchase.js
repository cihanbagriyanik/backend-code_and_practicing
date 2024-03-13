"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    "firm_id": "65343222b67e9681f937f304",
    "brand_id": "65343222b67e9681f937f123",
    "product_id": "65343222b67e9681f937f422",
    "quantity": 1000,
    "price": 20
}
/* ------------------------------------------------------- */
// Purchase Model:

const PurchaseSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    firmId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Firm',
        required: true
    },

    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },

    quantity: {
        type: Number,
        default: 0
    },

    price: {
        type: Number,
        default: 0
    },

    amount: {
        type: Number,
        default: function(){ return this.quantity  * this.price }, // create
        transform: function(){ return this.quantity  * this.price }, // update
        set: function(){ return this.quantity  * this.price } // kullanıcı total gönderirse bile kendi hesaplasın
        
    }

}, { collection: 'purchases', timestamps: true })
module.exports = mongoose.model('Purchase', PurchaseSchema)
