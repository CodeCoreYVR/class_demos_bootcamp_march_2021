/**
 * 
 * @param {function} fn A callback
 * @param {function} logFn A logging function like console.info
 * @returns 
 */
function loud(fn, logFn = console.log) {
  logFn(`Calling: ${fn.name}`);
  const val = fn();
  logFn(`Called ${fn.name} value is ${val}`);
  return val;
}

const five = () => 5 + 5;

// loud(five()); // -> loud(10) // doesn't work because loud is expecting a function
// // All function invokcations are expressions. Expressions must be evaluated to a value
// loud(5); // is the same as above
// loud(5 + 5);

loud(five); // only this works

const returnFn = function returnFn() {
  return function ten() {
    return 10
  }
}

loud(returnFn(), console.warn);

loud(function() { return 'hello'}, console.error)

console.log('------------------------------------------------------------')

const arr = [1,2,3,4,5];

// arr.forEach((element, i, a) => {
  //   console.log(element, i, a);
  // })

  // re-creating a each method

  // reverse engineered forEach method
  const each = (callback, arr) => {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
}

// using the each method
each((element, i, a) => {
  console.log(element, i, a);
}, arr)


console.log('------------------------------------------------------------')
console.log('------------------------------------------------------------')
// Reverse engineered array.map

const map = (callback, arr) => {
  const resultsArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultsArr.push(callback(arr[i], i, arr));
  }
  return resultsArr;
}

// using map
const multipliedBy2 = map((n, i, arr) => {
  return n * 2;
}, arr);

console.log(multipliedBy2);

console.log('------------------------------------------------------------')

const repeat = (str, amount) => {
  return str.repeat(amount);
}
console.log(repeat('a', 10))

const arr2 = ['a', 'b', 'c', 'd'];
console.log(map(repeat, arr2));






