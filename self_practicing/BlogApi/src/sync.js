"use strict";

/* -------------------------------------------------------------------------- //

    BLOGAPP API Project SYNC.js

/* -------------------------------------------------------------------------- */

const { BlogCategory, BlogPost } = require("./models/blogModel");

module.exports = async () => {
  /* BlogCategory */

  // Get first blogCategory:
  const blogCategory = await BlogCategory.findOne();
  // console.log(blogCategory._id)

  if (blogCategory) {
    BlogPost.updateMany(
      {
        //? Filter:
        blogCategoryId: { $exists: false },
      },
      {
        //? Update:
        blogCategoryId: blogCategory._id,
        // $unset: { "blogCategoryId": 1 }
      }
    ).catch((err) => console.log(err));
  }

  // End:
  console.log("* Synchronized *");
  /* Finished */
};
