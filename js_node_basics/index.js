const add=require('./add');
const primes=require('./prime');

// console.log(primes)
console.log(primes.reduce(add,0))
