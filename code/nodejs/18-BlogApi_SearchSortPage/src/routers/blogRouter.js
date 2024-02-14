"use strict";
/* -------------------------------------------------------
    * BLOG API PROJECT (BLOG ROUTERS)
------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//* Routers

const router = require("express").Router();
// Import Controller:
const { BlogPost, BlogCategory } = require("../controllers/blogController");

// URL: /blog

// BlogCategory:
router.route("/category").get(BlogCategory.list).post(BlogCategory.create);

router
  .route("/category/:categoryId")
  .get(BlogCategory.read)
  .put(BlogCategory.update)
  .delete(BlogCategory.delete);

// BlogPost:
router.route("/post").get(BlogPost.list).post(BlogPost.create);

router
  .route("/post/:postId")
  .get(BlogPost.read)
  .put(BlogPost.update)
  .delete(BlogPost.delete);

// Export:
module.exports = router;
