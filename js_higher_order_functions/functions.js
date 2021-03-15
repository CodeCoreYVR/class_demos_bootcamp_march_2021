// function add(a, b) {
//   return a + b;
// }

// const addReference = add;
// add(10, 5)
// addReference(10, 5)

// console.log(add)
// console.log(add(10, 5))

// let add = function(a, b) {
//   return a + b;
// }

// let add = (a, b) => {
//   return a + b;
// }

// const bark = name => `${name} barks`;

// console.log(bark('brandon'));


// Demo: To Arrow

const subtract = (a, b) => a - b;

const flip = (fn) => (a, b) => fn(b, a);

const flippedSubtract = flip(subtract) // returns a new function
console.log(flippedSubtract(5, 10));


const V = (x) => {
  return function(y) {
    return function(z) {
      z(x)(y);
    }
  }
}

const V2 = x => {
  return (y) => {
    return (z) => {
      z(x)(y);
    }
  }
}

const V3 = x => {
  return (y) => {
    return z => z(x)(y)
  }
}

const V4 = x => {
  return y => z(x)(y)
}

const V5 = x => y => z(x)(y);

const arr = [1,2,3,4,5];

console.log(arr.map(function (n) { return n + 1 }));







