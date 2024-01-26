"use strict";
console.log("hello");
const { log } = require("console");
//* require process
// require('./modules/module.js')
// require('./modules/module')
//* if the file name index.js
// require('./modules/')

//?Single function
// const test = require('./modules/module')
// test()
// console.log(test);

//? multi function
//! With Array
// const [test1, test2, test3] = require("./modules/module");
// test1();
// test2();
// test3();
// test1(), test2(), test3();

//! with Object
const {
  testFunctionA,
  testFunctionB: testB,
  testFunctionC,
  pi,
} = require("./modules/module");
testFunctionA();
testB();
testFunctionC();
testFunctionA(), testB(), testFunctionC();

console.log(pi);
