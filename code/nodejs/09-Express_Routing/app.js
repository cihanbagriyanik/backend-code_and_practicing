"use strict";
/*----------------------------------

    EXPRESS FRAMEWORK

------------------------------------*/

console.log("Welcome to Express");

/* ExpressJS Start */
// $ npm i express
const express = require("express"); // Assign expressFramework to express variable.
const app = express();

/* ENV */
// $ npm i dotenv
require("dotenv").config();
// console.log(process.env); // GLOBAL ENV
// console.log(process.env.PORT);
// const PORT = process.env.PORT ?? 8000;
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";

/* -------------------------------------------------------------------------- */
// HTTP_Methods & URLs & Paths:
// app.get("/", (request, response) => {
//   //   response.write("Hello");
//   //   response.write(
//   //     JSON.stringify({
//   //       message: "Hello",
//   //     })
//   //   );
//   //   response.end();

//   //! Express de send() parametresi ile obje vs herseyi otomatik gorur json stringify ya gerek yok END e gerek yok */
//   response.send({
//     message: "Hello",
//   });
// });

// app.post('/', (request, response) => response.send({ message: "called in 'post' method."}))
// app.put('/', (request, response) => response.send({ message: "called in 'put' method."}))
// app.delete('/', (request, response) => response.send({ message: "called in 'delete' method."}))
/* -------------------------------------------------------------------------- */
//? allow at all methods:
//! Tercih edilen bir yontem degil mecbur kalmadigimiz takdirde kullanilmicak...
// app.all('/', (request, response) => response.send({ message: "'all' option allows to all methods."}))

/* -------------------------------------------------------------------------- */
//Route:
// app
//   .route("/")
//   .get((request, response) =>
//     response.send({ message: "called in 'get' method." })
//   )
//   .post((request, response) =>
//     response.send({ message: "called in 'post' method." })
//   )
//   .put((request, response) =>
//     response.send({ message: "called in 'put' method." })
//   )
//   .delete((request, response) =>
//     response.send({ message: "called in 'delete' method." })
//   );

/* -------------------------------------------------------------------------- */
//? URL (path) Options:
// app.get('/', (request, response) => response.send({ message: "in root"})) // "/" == root
// app.get('/path', (request, response) => response.send({ message: "in /path"}))
// app.get('/a/b/c', (request, response) => response.send({ message: "in /a/b/c"}))

// abc123 de olabilir abc123x de olabilir
// app.get('/abc(x)?123', (request, response) => response.send({ message: "in /abc(x)?123"}));

// abcx123 or abcx..........123 (min bir tane x olmali)
app.get('/abc(x+)123', (request, response) => response.send({ message: "in /abc(x+)123"}));

app.get('/abc123*', (req, res) => res.send("in 'abc123*'")) // abc123 or abc123... // abc123(ANY)
app.get('/abc*123', (req, res) => res.send("in 'abc*123'")) // abc123 or abc...123 // abc(ANY)123
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/* Express 
   RunServer */
app.listen(PORT, () => console.log(`Server: http://${HOST}:${PORT}`));
