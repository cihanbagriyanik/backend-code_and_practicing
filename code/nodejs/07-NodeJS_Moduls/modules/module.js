"use strict";

console.log(" module file ");

//? single function
// const testFunction = function () {
//   console.log(" test function ");
// };
// module.exports = testFunction;

// var x = `adfdgsdrfsdras`
// module.exports = x

//? multi function
// const testFunctionA = function () {
//   console.log(" test function A ");
// };

// const testFunctionB = function () {
//   console.log(" test function B ");
// };

// const testFunctionC = function () {
//   console.log(" test function C ");
// };

// const pi = 3.14;

// module.exports = [testFunctionA, testFunctionB, testFunctionC];
// module.exports = {
//   testA: testFunctionA,
//   testFunctionB: testFunctionB,
//   testFunctionC: testFunctionC,
//   pi: pi,
// };

//? short form / hand
// module.exports.testFunctionA = function () {
//   console.log(" test function A ");
// };

// module.exports.testFunctionB = function () {
//   console.log(" test function B ");
// };

// module.exports.testFunctionC = function () {
//   console.log(" test function C ");
// };

// module.exports.pi = 3.14;

//? 2. Short form / hand
module.exports = {
  testFunctionA: function () {
    console.log(" test function A ");
  },

  testFunctionB: function () {
    console.log(" test function B ");
  },

  testFunctionC: function () {
    console.log(" test function C ");
  },

  pi: 3.14,
};
