// Callbacks are the way to handle async functions
// setTimeout(() => {
//   console.log('waited 2 seconds')
//   setTimeout(() => {
//     console.log('waited 2 seconds again...')
//   }, 2000)
// }, 2000);

// To create a promise we initialize a new instance of the Promise constructor
// const p = new Promise((resolve, reject) => {
//   let bool = false;
//   reject('Bad Value')
//   // if (bool) {
//   //   rej('bad value');
//   // }
//   // res('good value');
// })
// when a promise is initialized it is in a pending state
// once the promise invokes resolve -> the promise is fulfilled with the value passed into resolve
// once the promise invokes reject -> the promise is rejected with the value passed into reject

// function throwCoin() {
//   //return a promise object and the promise will either be rejected or resolved
//   return new Promise((resolve, reject) => {
//     const face = Math.floor(Math.random() *2); // we want to return either 1 or 0
//     const randomTime = (Math.floor(Math.random() * 4) + 1) * 1000;
//     // return number between 1000 - 4000
//     //  we are going to invoke the setTimeout function which is going to get invoked after 
//     //some random time represented by const randomTime
//     setTimeout(() => {
//       //if the random time is greater than 3000 ms
//       if(randomTime > 3000){
//         // we want to reject
//         reject("Coin was thrown too high");
//       }
//       // if the face variable has a value of 1
//       if(face){
//         resolve("heads");
//       } else {
//       //otherwise, we are going to resolve with "tails"
//         resolve("tails");
//       }

//     }, randomTime)
//   })
// }
// const coin = throwCoin();
//   coin.then((val) => {
//     // .then accepts a callback
//     // this callback is invoked if the promise calls resolve -> turns into a fulfilled state
//     console.log(val);
//   }).catch((err) => {
//     // .ethen accepts a callback
//     // this callback is invoked if the promise calls reject -> turns into a rejected state
//     // Everytime you use a promise you must add a .catch or else if the promise ever rejects javascript will throw an error
//     console.log(err)
//   })


// Demo: Delay Function

function delay(ms, val) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (val === 'monkey') {
        rej(new Error('no monkeys'))
      }
      res(val)
    }, ms)
  })
}

// delay(2000, 'blue')
//   .then((val) => {
//     console.log(val); // waited 2 ms
//     return delay(6000, 'red')
//     // return 'Hello World'
//   })
//   .then((val) => {
//     console.log(val)  // undefined
//     return delay(3000, 'green')
//   })
//   .then((val) => {
//     console.log(val)
//   })

// Promise Methods:

// Promise.resolve returns a fulfilled promise with the argument as a result
// Use this to get the fullilled value of an already resolved promise

// const a = delay(1000, 'red');
// Promise.resolve(a).then(val => console.log(val))

// Promise.reject same thing as resolve but for rejected promises

// Promise.all is used to execute an array of promises in parellel
// it returns a new promise where the resolved value is an array of resolved values

// Promise.all([
//   delay(1000, 'red horse'),
//   delay(2000, 'blue horse'),
//   delay(3000, 'brown horse'),
//   delay(4000, 'monkey')
// ]).then((results) => {
//   console.log(results);
// }).catch((err) => {
//   console.log(err);
// }) 

// Sequential vs Parellel.
// Sequence
// console.time('sequential')
// delay(1000, 'blue')
//   .then((val) => {
//     console.log(val)
//     return delay(1000, 'red')
//   })
//   .then((val) => {
//     console.log(val)
//     return delay(1000, 'green')
//   })
//   .then((val) => {
//     console.log(val)
//     return delay(1000, 'orange')
//   })
//   .then((val) => {
//     console.log(val)
//     return delay(1000, 'purple')
//   })
//   .then((val) => {
//     console.log(val)
//     console.timeEnd('sequential')
//   })

// console.time('parallel');
// Promise.all([
//   delay(1000, 'blue'),
//   delay(1000, 'red'),
//   delay(1000, 'green'),
//   delay(1000, 'orange'),
//   delay(1000, 'purple')
// ]).then((val) => {
//   console.log(val);
//   console.timeEnd('parallel');
// })

// Promise.race
// Is like Promise.all it will run promises in parallel but will resolve the first promise that completes

Promise.race([
  delay(1000, 'blue'),
  delay(2000, 'red'),
  delay(3000, 'green'),
  delay(1000, 'orange'),
  delay(0, 'purple')
]).then((val) => {
  console.log(`${val} horse has won!`)
})






