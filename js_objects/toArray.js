// Create a function to turn an object into a 2d array of key-value pairs
const testObj = { a: 1, b: 2, c: 3 };

function toArray(obj) {
  const arr = []
  for (let key in obj) {
    const pair = [key, obj[key]];
    arr.push(pair);
  }
  return arr;
}

console.log(toArray(testObj));


