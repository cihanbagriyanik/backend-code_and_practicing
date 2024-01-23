"use strict";
/* ---------------------------------------------

    OOP - Object Oriented  Programs

----------------------------------------------- */

/* --------------------------------------------- 
    OBJECTS
-----------------------------------------------*/

const camelCaseNamedObject = {
  propertyName: "value", // field, attribute

  methodName: function () {
    return "this is a method.";
  },
};
// console.log(camelCaseNamedObject.propertyName);
// console.log(camelCaseNamedObject.methodName());
/* -------------------------------------------------------------------------- 

const Car = {
  brand: "Ford",
  model: "Mustang",
  year: 1967,
  isAutoGear: true,
  colors: ["white", "red"],
  details: {
    color1: "white",
    color2: "red",
    engineSize: 4900,
  },

  startEngine: function () {
    return "Engine Runned.";
  },
};
console.log(Car.brand);
console.log(Car.colors);
console.log(Car.colors[0]);
console.log(Car.colors[0]);
console.log(Car.details);
console.log(Car.details.engineSize);
console.log(Car.startEngine());

//Alternative style
// console.log(Car["brand"]);
// console.log(Car["colors"][0]);
// console.log(Car["details"]["engineSize"]);
// console.log(Car["startEngine"]());
*/

/* -------------------------------------------------------------------------- */

//? THIS KEYWORD:

const Car = {
  brand: "Ford",
  model: "Mustang",
  year: 1967,
  isAutoGear: true,
  colors: ["white", "red"],
  details: {
    color1: "white",
    color2: "red",
    engineSize: 4900,
  },

  startEngine: function () {
    return "Engine Runned.";
  },

  getDetails: function () {
    return this;
    // return this.brand + " " + this.model + " " + this.year
    // return this.startEngine();
  },

  arrowMethod: () => {
    //! Arrow function is GLOBAL SCOPE -------- (NOT working this keword in here)
    return this;
  },
};

console.log(Car.getDetails());
console.log(Car.arrowMethod());

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
