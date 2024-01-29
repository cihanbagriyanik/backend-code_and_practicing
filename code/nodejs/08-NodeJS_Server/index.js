"use strict";
console.log("node server");

const http = require("node:http");

/*
const app = http.createServer((request, response) => {
  console.log(request);

  response.end('welcome first server');
});
// app.listen(8000, () => console.log('server runned: http://127.0.0.1:8000'));
app.listen(8000, () => console.log('server runned: http://localhost:8000'));
*/

/* -------------------------------------------------------------------------- */

// const app = http.createServer((req, res) => {
//   if (req.url == '/') res.end(' <h1> welcome HOME page </h1> ');
//   else if (req.url == '/login') res.end(' <h1> welcome LOGIN page </h1> ');
//   else res.end(' <h1> welcome server running </h1> ');
// });
// app.listen(8000, () => console.log('server runned: http://localhost:8000'));

/* -------------------------------------------------------------------------- */

// const app = http.createServer((req, res) => {
//   if (req.url == '/') {
//     res.write('first result');
//     res.write('second result');
//     res.end(' <h1> welcome HOME page </h1> ');
//   } else if (req.url == '/login') {
//     // res.write('first result');
//     // res.write('second result');
//     res.end();
//   } else res.end(' <h1> welcome server running </h1> ');
// });
// app.listen(8000, () => console.log('server runned: http://localhost:8000'));

/* -------------------------------------------------------------------------- */

// const app = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.writeHead(200, "successfully", {
//       "content-type": "text",
//       another: "json",
//       another2: "?",
//     });

//     const obj = {
//       key1: "value1",
//       key2: "value2",
//       key3: "value3",
//     };
//     res.end(JSON.stringify(obj));
//     // if (req.method == "GET") {
//       //   res.end(' <h1> welcome HOME page </h1> ');
//     // } else if (req.method == "POST") {
//     //   res.end(" <h1> POST Meothod </h1> ");
//     // }
//   } else if (req.url == "/login") {
//     // res.statusCode = 200; // default 200
//     // res.statusMessage = 'OK'; // default OK
//     res.statusCode = 202;
//     res.statusMessage = "yo can login";
//     res.end();
//   } else {
//     res.statusCode = 404;
//     res.statusMessage = "page not found";
//     res.end();
//   }
// });
// app.listen(8000, () => console.log("server runned: http://localhost:8000"));

/* -------------------------------------------------------------------------- */

//!first global then node_modules
// const d = require("dotenv");
// d.config()

require("dotenv").config();
// console.log(process.env);
const PORT = process.env.ENV_PORT ?? 8000;
const HOST = process.env.ENV_HOST ?? 'http://127.0.0.1';

http
  .createServer((req, res) => {
    res.end(" <h1> welcome HOME page </h1> ");
  })
  .listen(PORT, () => console.log(`server runned: ${HOST}:${PORT}`));
