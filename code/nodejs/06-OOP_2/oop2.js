"use strict";
/* ---------------------------------------------

    OOP - Object Oriented Programing

--------------------------------------------- */

/* ---------------------------------------------
    CLASSES
--------------------------------------------- *
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.

// Class Declaration:
// class PascalNamedClass { ... }

// Class Expression:
// const PascalNamedClass = class { ... }

const ExampleCLass = class {

    undefinedProperty // Only definition.
    property = 'value1'
    field = 'value2'
    attribute = 'value3'

    method1() {
        return this
    }

    method2() {
        this.property = 'new-value'
        return 'method-2 runned'
    }
}

//? INSTANCE: Class'tan üretilen nesnelere denir.
const InstanceName = new ExampleCLass()
console.log( InstanceName )

console.log( InstanceName.attribute )
InstanceName.attribute = 'new-attr'
console.log( InstanceName.attribute )

console.log( InstanceName.property )
console.log( InstanceName.method2() )
console.log( InstanceName.property )

/* --------------------------------------------- *
//? constructor() method:

class Car {

    isRunning = false

    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Engine runned')
        return this.isRunning
    }
}

const Ford = new Car('Ford', 'Mustang', 1967)
console.log(Ford)
console.log(Ford.isRunning)
Ford.runEngine()
console.log(Ford.isRunning)

const Mercedes = new Car('Mercedes', 'CLK200', 2000)
console.log(Mercedes)

/* --------------------------------------------- */
//? INHERITANCE: MirasAlma. Başka bir class'ın tüm özelliklerini devralma (parent-child ilişkisi kurma)
//* THIS = Child (current) Class
//* SUPER = Parent Class

class Vehicle {
  vehicleIsActive = false;

  constructor(vehicleType) {
    this.vehicleType = vehicleType;
  }

  sayHello() {
    console.log("Hello");
  }
}

class Car extends Vehicle {
  isRunning = false;

  constructor(brand, model, year, vehicleType = "Car") {
    //? super() parametresi en tepede olmalı (Önce parent constructor çalıştırılmalı)
    // super('Car') // run constructor of ParentClass
    super(vehicleType);
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  runEngine() {
    this.isRunning = true;
    console.log("Engine runned");
    return this.isRunning;
  }
}

const Ford = new Car("Ford", "Mustang", 1967);
console.log(Ford);

const Mercedes = new Car("Mercedes", "M300", 2010, "Track");
console.log(Mercedes);
console.log(Mercedes.vehicleIsActive);
Mercedes.sayHello();

class Accessory extends Car {
  constructor(accessoryName, brand, model, year, vehicleType = "Car") {
    super(brand, model, year, vehicleType);
    this.accessoryName = accessoryName;
  }
}

const fordClimate = new Accessory(
  "Bosh Climate",
  "Ford",
  "Mustang",
  1967,
  "Car"
);
console.log(fordClimate);
fordClimate.runEngine();
fordClimate.sayHello();

/* --------------------------------------------- */

/* --------------------------------------------- */
/* --------------------------------------------- */
