"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | CLARUSWAY FullStack Team
----------------------------------------------------------------------------- */
//? Middleware Permissions
/* -------------------------------------------------------------------------- */
module.exports = {
  isLogin: async (req, res, next) => {
    return next(); // Disabled

    if (req.user && req.user.isActive) {
      next();
    } else {
      res.errorStatusCode = 403;
      throw new Error("No Permission: You must Login");
    }
  },

  isAdmin: async (req, res, next) => {
    return next(); // Disabled

    if (req.user && req.user.isActive && req.user.isAdmin) {
      next();
    } else {
      res.errorStatusCode = 403;
      throw new Error("No Permission: You must be Admin and Login");
    }
  },
};
