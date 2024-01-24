"use strict";
/* ---------------------------------------------

    OOP - Object Oriented Programs

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
/*
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
*/
/* -------------------------------------------------------------------------- */
//? ARRAY DESTRUCTURING

const testArray = ["value0", "value1", "value2", "value3", "value4"];

const var0 = testArray[0];
const var1 = testArray[1];
const var2 = testArray[2];
const var3 = testArray.slice(3, 5);
// console.log(var0, var1, var2, var3);

//? Siralama onemli
// const [firstItem, secondItem] = testArray
// console.log(firstItem, secondItem);

//? Rest Operator (Toplayici) (Esittirin sol tarafinda) (en sonda olmak zorunda)
// const [firstItem, secondItem, ...others] = testArray;
// console.log(firstItem, secondItem, others);

//? Spread Operator (Dagitici) (Esittirin sag tarafinda)
// const newArray = [...testArray, "value5", "value6"];
// console.log(newArray);

/* -------------------------------------------------------------------------- */
//? OBJECT DESTRUCTURING
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

//? Rest Operator(Key isimleri onemli)
// const { year, model, brand } = Car;
// console.log(brand, model, year);

//? Isim Degistirme
const { year, model, brand: newName, ...otherItem } = Car;
// console.log(newName, model, year);
// console.log(otherItem);

//? Spread Operator
const newObject = {
  ...Car,
  newKey: "new-value",
};
// console.log(newObject);

//? Object to JSON
const json = JSON.stringify(Car);
// console.log(typeof json, json);

//? JSON to Object
const obj = JSON.parse(json);
// console.log(typeof obj, obj);

//? Object to Array
//KEYS:
const keysInArr = Object.keys(Car);
// console.log(keysInArr);

//VALUES:
const valuesInArr = Object.values(Car);
// console.log(valuesInArr);

// (key, value)
// Const objInArr = [...Car] //NOT WORKING
const objInArr = Object.entries(Car);
// console.log(objInArr);

/* ---------------------------------------------
    Object Constructor
----------------------------------------------- */

const ConstructorFunction = function () {
  this.property = "value";
};

/* -------------------------------------------------------------------------- */
//? "NEW" KEYWORD:
const CarConstructor = function (brand, model, year = 1967) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.isRunning = false;
  this.startEngine = function () {
    console.log("Engine Runned");
    this.isRunning = true;
  };
};

const newCar = new CarConstructor("Ford", "Mustang");
console.log(newCar);
console.log(newCar.model);

const newCar2 = new CarConstructor("Mercedes", "C200", 2010);
console.log(newCar2);

const newCar3 = new CarConstructor("Renault", "Megane", 2015);
console.log(newCar3);
console.log("isRunning", newCar3.isRunning);
newCar3.startEngine();
console.log("isRunning", newCar3.isRunning);

/* -------------------------------------------------------------------------- */
