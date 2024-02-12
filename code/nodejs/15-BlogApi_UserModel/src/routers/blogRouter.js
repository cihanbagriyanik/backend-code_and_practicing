"use strict";
/* -------------------------------------------------------
    * BLOG API PROJECT (ROUTERS)
------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//* Routers

const router = require("express").Router();
// Import Controller:
const { BlogPost } = require("../controllers/blogController");

router.route("/post").get(BlogPost.list).post(BlogPost.create);

router
  .route("/post/:postId")
  .get(BlogPost.read)
  .put(BlogPost.update)
  .delete(BlogPost.delete);

// Export:
module.exports = router;
