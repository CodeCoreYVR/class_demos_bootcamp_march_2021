// JS: Objects

// Creating Object

const dog = {
  age: 10,
  firstName: 'bailey',
  "last name": 'winston',
  toys: [
    "amazon box",
    "pork leg bone",
    "rubber bunny",
    "torn teddy bear"
  ],
  bark: function() {
    return 'Bork'
  }
}

console.log(dog.bark());


// console.log(dog);

// Reading values
// dot notation
console.log(dog.age) // 10

// square bracket notation []
// dot notation is syntax sugar of this
console.log(dog["age"]); // 10

// If you have an illegal key name:
// console.log(dog.last name); // gives us error
console.log(dog["last name"]);

// Using expressions to resolve key names:
console.log(dog["to" + "ys"]); // [ 'amazon box', 'pork leg bone', 'rubber bunny', 'torn teddy bear' ]

// Write new or edit existing attributes
// Select a key using dot notation or square bracket notation then use the assignment operator
dog.age = 12;
console.log(dog.age);
dog['firstName'] = 'bobby';
console.log(dog);

// Object Utility Functions:

// Get all keys
// Object.keys(ojb);
// console.log(Object.keys(dog)); [ 'age', 'firstName', 'last name', 'toys' ]

// Get all values
// Object.values(obj);
// console.log(Object.values(dog)); // [
//   12,
//   'bobby',
//   'winston',
//   [ 'amazon box', 'pork leg bone', 'rubber bunny', 'torn teddy bear' ]
// ]

// Merge objects together
// Object.assign(target, sources)
// Will return the target object with properties from sources

const a = { a: 1, b: 2, c: 3 };
const b = { z: 26, y: 25, x: 24, a: 500 };

console.log(Object.assign(a, b, { apples: 'one', bananas: 'two', a: false }));

// the object called "a" has been mutated.
console.log(a);

// copy an object
const bCopy = Object.assign({}, b);
console.log(bCopy);


// Iterating Over Objects

// The for..in loop will iterate over keys of an object. We can use the key and square bracket notation to get the value.

console.log('--------------Iterating Over Object--------------------')
for (let key in dog) {
  console.log("key: ", key, "value ", dog[key])
}


