function add(a, b = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(a) || isNaN(b)) {
                reject('Please enter number as an argument')
            }
            resolve(a + b)
        })
    })
}

function sub(a,b=0){
    return new Promise((resolve,reject)=>{
        if(isNaN(a) || isNaN(b)){
            reject('Please enter number as an argument')
        }
        resolve(a-b)
    })
}

function div(a,b=1){
    return new Promise((resolve, reject)=>{
        if(isNaN(a) || isNaN(b)){
            reject('Please enter number as an agrument')
        }
        resolve(a/b)
    })
}
function mult(a, b=1){
    return new Promise((resolve, reject)=>{
        if(isNaN(a)){
            reject(`${a} is not a number`)
        }else if(isNaN(b)){
            reject(`${b} is not a number`)
        }
        resolve(a * b)
    })
}
function pow(a, b =1){
    return new Promise((resolve, reject)=>{
        if(isNaN(a)){
            reject(`${a} is not a number`)
        }else if(isNaN(b)){
            reject(`${b} is not a number`)
        }
        resolve( a**b)
    })
}

// add(5,6).then(result=>{console.log(result)}).catch(err=>{
//     console.log(err)
// })

// add(9)

//     .then(value => add(9, value))// value is 9

//   .then(value => add(2, value))// value is 18

//   .then(value => mult(5, value)) // value is 20

//   .then(value => div(value, 10)) // r is 100

//   .then(console.log); // logs 10
pow(2)

  .then(r => pow(2, r)) // r is 2

  .then(r => pow(2, r)) // r is 4

  .then(r => mult("fitty-two", r)) // r is 16, but the mult('fitty-two', ...)

  // should reject

  .then(console.log) // never makes it here

  .catch(console.log); // error logs 'fitty-two is not a valid number'