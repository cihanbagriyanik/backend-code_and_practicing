"use strict";
/* --------------------------------------------------------------------------
   * NODEJS EXPRESS | CLARUSWAY FullStack Team
----------------------------------------------------------------------------- */
// app.use(authentication);

const Token = require("../models/token");

const User = require("../models/user");

/* -------------------------------------------------------------------------- */

module.exports = async (req, res, next) => {
  // Authorization: Token ...
  // Authorization: ApiKey ...
  // Authorization: X-API-KEY ...
  // Authorization: x-auth-token ...
  // Authorization: Bearer ...

  const auth = req.headers?.authorization || null;
  const tokenKey = auth ? auth.split(" ") : null;

  if (tokenKey && tokenKey[0] == "Token") {
    const tokenData = await Token.findOne({ token: tokenKey[1] }).populate(
      "userId"
    );

    const user = tokenData ? tokenData.userId : undefined;
    req.user = tokenData ? tokenData.userId : undefined;
  }
  next();
};
