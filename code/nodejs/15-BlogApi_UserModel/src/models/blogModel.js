"use strict";
/* -------------------------------------------------------
    * BLOG API PROJECT (MODELS)
------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//* Models

const mongoose = require("mongoose");

// const modelSchema = new mongoose.Schema(
//     {fields}, {model detail}
// )

//! https://mongoosejs.com/docs/models.html

// const modelSchema = new mongoose.Schema(
//   {
//     fieldName: {
//       type: String, // data type
//       default: null, //
//       trim: true, // bosluklari temizler
//       select: true, // cigirilinca gelsin mi?
//       index: true, // aramada hizli erisim
//       unique: true,
//       require: true, // veri girisi zorunlu mu?
//       enum: [[1, 2, 3], "error message"], // standart veri girisi saglar
//       validate: [
//         // girilen veriyi istenilen fonksiyon ile kontrol eder
//         function (data) {
//           return true;
//         },
//       ],
//       get: function (data) {
//         // veri cagirilinca calisacak fonksiyon
//         return true;
//       },
//       set: function (data) {
//         // veri kayit ederken calisicak fonksiyon
//         return true;
//       },
//     },
//   },

//   {
//     collection: collectionName,
//     timestamps: true, // veri kayit ve guncellemede zaman damgasi
//   }
// );

//? BlogCategory:
const BlogCategorySchmea = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
    },
  },
  {
    collection: "blogCategories",
    timestamps: true,
  }
);

//? BlogPost:
const BlogPostSchema = new mongoose.Schema(
  {
    // _id
    // blog category oluşunca kullan
    // blogCategoryId:{
    // }

    blogCategoryId: {
      type: mongoose.Schema.Types.ObjectId, // ForeignKey - // Relational ID
      ref: "BlogCategory",
    },

    title: {
      type: String,
      trim: true,
      require: true,
    },
    content: {
      type: String,
      trim: true,
      require: true,
    },
    published: {
      type: Boolean,
      default: true,
    },
    // createdAt
    // updatedAt  mongo takip ediyor
  },
  {
    collection: "blogPost",
    timestamps: true, // veri kayıt ve güncellemede zaman damgası
  }
);

// Export
module.exports = {
  BlogCategory: mongoose.model("BlogCategory", BlogCategorySchmea),
  BlogPost: mongoose.model("BlogPost", BlogPostSchema),
};
