"use strict";
console.log("node server");

const http = require("node:http");

/*
const app = http.createServer((request, response) => {
  console.log(request);

  response.end("welcome first server");
});
// app.listen(8000, () => console.log("server runned: http://127.0.0.1:8000"));
app.listen(8000, () => console.log("server runned: http://localhost:8000"));
*/

/* -------------------------------------------------------------------------- */

// const app = http.createServer((req, res) => {
//   if (req.url == `/`) res.end(" <h1> welcome HOME page </h1> ");
//   else if (req.url == `/login`) res.end(" <h1> welcome LOGIN page </h1> ");
//   else res.end(" <h1> welcome server running </h1> ");
// });
// app.listen(8000, () => console.log("server runned: http://localhost:8000"));

/* -------------------------------------------------------------------------- */

// const app = http.createServer((req, res) => {
//   if (req.url == `/`) {
//     res.write(`first result`);
//     res.write("second result");
//     res.end(" <h1> welcome HOME page </h1> ");
//   } else if (req.url == `/login`) {
//     // res.write(`first result`);
//     // res.write("second result");
//     res.end();
//   } else res.end(" <h1> welcome server running </h1> ");
// });
// app.listen(8000, () => console.log("server runned: http://localhost:8000"));

/* -------------------------------------------------------------------------- */

const app = http.createServer((req, res) => {
  if (req.url == `/`) {
    if (req.method == `GET`) {
      res.end(" <h1> welcome HOME page </h1> ");
    } else if (req.method == `POST`) {
      res.end(" <h1> POST Meothod </h1> ");
    }
  } else if (req.url == `/login`) {
    res.end();
  } else res.end(" <h1> welcome server running </h1> ");
});
app.listen(8000, () => console.log("server runned: http://localhost:8000"));
