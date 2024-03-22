"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// app.use(errorHandler):

module.exports = (err, req, res, next) => {
  // return res.status(res?.errorStatusCode || 500).send({
  //     error: true,
  //     message: err.message,
  //     cause: err.cause,
  //     body: req.body
  // });

  const errorStatusCode = res.errorStatusCode ?? 500;

  const data = {
    error: true,
    message: err.message,
    cause: err.cause,
    body: req.body,
  };

  if (req.url.startsWith("/api")) {
    res.status(errorStatusCode).send(data);
  } else {
    res.render("error", {
      data,
      user: req.session?.user,
    });
  }
};
