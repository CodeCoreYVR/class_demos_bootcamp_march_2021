// promises
// we create a new promise object
//initialize with a callback fxn that takes resolve and reject fxns as arguments
new Promise((resolve, reject)=>{
  if(error){
      return PromiseRejectionEvent(error);
  }
  resolve(value);
});

const p = new Promise((resolve, reject)=>{
  let x; 
  if (x){
      resolve("hello");
      //calling resolve will save this value of "hello"
      //this value is known as the fulfilled value
  } else {
  //resolve and rejects are functions
  reject("goodbye");
  //rejection reason "goodbye"
  }
 
  //as soon as either resolve or rejection happens - the promise is said to be settled
});
console.log(p);

//function flipCoin
//fxn is called then it returns a promise object
//declared a variable called bool this represents TAILS and HEADS
//Math.random -> generate a random float number -> between 0 but less than 1
//Math.floor -> round off the decimal
// Either you get 1 or 0 (as it rounds downs)
function flipCoin() {
  return new Promise((resolve, reject)=>{
   const bool = [1,0][Math.floor(Math.random()*2)];

    // if the value of 1 then resolve with tails
   if(bool){
       resolve("tails");
   } else {
       reject("heads");
   }
  })
}
// here you can check #36 

// function throwCoin
//return the result of the flip between 1 - 4 sec
//if it takes longer than 3 seconds then reject with "Coin was thrown too high"

function throwCoin() {
  //return a promise object and the promise will either be rejected or resolved
return new Promise((resolve, reject) => {
const face = Math.floor(Math.random() *2); // we want to return either 1 or 0
const randomTime = (Math.floor(Math.random() * 4) + 1) * 1000;
// return number between 1000 - 4000
//  we are going to invoke the setTimeout function which is going to get invoked after 
//some random time represented by const randomTime
setTimeout(() => {
   //if the random time is greater than 3000 ms
   if(randomTime > 3000){
    // we want to reject
    reject("Coin was thrown too high");
   }
   // if the face variable has a value of 1
   if(face){
    resolve("heads");
   } else {
  //otherwise, we are going to resolve with "tails"

       resolve("tails");
   }

}, randomTime)

})
}
//console.log((Math.floor(Math.random() * 4) + 2) * 1000);





