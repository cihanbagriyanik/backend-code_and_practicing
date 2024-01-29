"use strict";
console.log("node server");

const http = require("node:http");

const app = http.createServer((request, response) => {
  console.log(request);

  response.end("welcome first server");
});
// app.listen(8000, () => console.log("server runned: http://127.0.0.1:8000"));
app.listen(8000, () => console.log("server runned: http://localhost:8000"));
