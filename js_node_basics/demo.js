const path=require('path');

// console.log(global);// Want to see what is inside global

// console.log(process);
// console.log(process.argv); // Digging deep in to process .argv

// const setTimeout = () =>{
//     console.log('You suck!!')
// }

// setTimeout(() => {
//     console.log('Hello World!')
// }, 10000);

/*
function test(){
    console.log('this',this); // `this` will point to global within a function
}

test();
console.log('Hello World!');
*/
// process.exit(-1); // Quits runnint the application and does not execute the code that  comes after id 

const generatedPath=path.join('/demo',"users","sg","codecore","ids")
console.log(generatedPath);


