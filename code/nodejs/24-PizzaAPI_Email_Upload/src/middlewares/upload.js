"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | CLARUSWAY FullStack Team
----------------------------------------------------------------------------- */
// Multer (upload module)
// $ npm i multer
// https://expressjs.com/en/resources/middleware/multer.html

const multer = require("multer");

module.exports = multer({
  // dest: "./uploads",
  storage: multer.diskStorage({
    destination: "./uploads",
    filename: function (req, file, returnCallBack) {
      // returnCallBack(error, filename)
      // console.log(file);
      returnCallBack(null, file.originalname);
    },
  }),
});
