// const dog = {
//   name: 'bailey',
//   bark: function() {
//     // The value of this within a method refers to the object that owns the method
//     console.log(this);
//   }
// }


function Dog(name, age) {
  // this is a new object {}. That is empty.
  this.name = name; // { name: 'bailey'}
  this.age = age; // { name: 'bailey', age: 5 }
}

// To create a new instance of a constructor we use the `new` keyword
const bailey = new Dog('bailey', 5);
console.log(bailey)

// You can check if an object is an instance of a constructor using the instanceof operator
console.log(bailey instanceof Dog);

const keeper = new Dog('keeper', 25);
console.log(keeper);

// Arrow functions cannot be constructors
const Cat = (name, age) => {
  this.name = name;
  this.age = age;
}

// const garfield = new Cat('garfield', 50); throws an error TypeError: Cat is not a constructor

// Demo: Constructed Counter

function Counter(count = 0, step = 1) {
  // this = {};
  this.count = count; // this = { count: 0 }
  this.step = step // this = { count: 0, step: 1 }
}

Counter.prototype.inc = function() {
  this.count += this.step;
  return this;
}
Counter.prototype.dec = function() {
  this.count -= this.step;
  return this;
}
Counter.prototype.setStep = function(n) {
  this.step = n;
  return this;
}
Counter.prototype.now = function() {
  return this.count;
}

// Creating a new counter instance:
const c1 = new Counter();

c1.inc = function() {
  this.count += 9999999999;
}


// Prototypes

// Every instance of a Constructor is assigned a Prototype
// A Prototype is an object that contains methods shared between instances of the Constructor
// You can view the prototype of an instance through the .__proto__ property
// Anytime you call a method on an object Javascript will look to see if the instance has the method... if the instance does not have the method Javascript will check the Prototype
// If you continue looking up the prototype chain you'll eventually reach the Object prototype

// Assigning Prototype methods

Dog.prototype.bark = function() {
  return `${this.name} barks "Bork Bork Bork"`;
}

const moneybagmicheals = new Dog('MoneyBag Michael', 10);
const drillBitDarrel = new Dog('DrillBit Darrel', 40);
moneybagmicheals.bark === drillBitDarrel.bark // true
moneybagmicheals.__proto__ === Dog.prototype // true;
moneybagmicheals.__proto__ === [].__proto__ // false. Different Constructors different prototypes

// In Javascript a convention for private methods/properties is to append a _ in-front of it. This means do not use any property that begins with _

// The accepted way of viewing the prototype is through Object.getPrototypeOf(instance)
Object.getPrototypeOf(moneybagmicheals);







