"use strict";
/* -------------------------------------------------------

    EXPRESSJS - MIDDLEWARES

------------------------------------------------------- */

const middleFunction1 = (req, res, next) => {
  req.message1 = "MiddlewareFunction-1 runned.";
  next();
};

const middleFunction2 = (req, res, next) => {
  req.message2 = "MiddlewareFunction-2 runned.";
  next();
};

/* -------------------------------------------------------------------------- */

// module.exports = middleFunction1;
// module.exports = [middleFunction1, middleFunction2];
// module.exports = {
//   middleFunction1,
//   middleFunction2,
// };

module.exports = {
  middleFunction1: (req, res, next) => {
    req.message1 = "MiddlewareFunction-1 runned.";
    next();
  },

  middleFunction2: (req, res, next) => {
    req.message2 = "MiddlewareFunction-2 runned.";
    next();
  },
};

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
