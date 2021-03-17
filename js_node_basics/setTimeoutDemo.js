console.log('Started Wait ...'); // 1

setTimeout(()=>{
    console.log('Wait 2 sec!!'); // 2
}, 2000);


console.log('Done Waiting!!'); // 3

let greeting="Good morning!!";

console.log('Before setTime:',greeting); //4

setTimeout(()=>{
    let greeting='yo';
    console.log('In the callback:', greeting); // 5
},1000);

console.log('After setTimeout:', greeting) //6

// 3 1 2 

//  1 2 4 3
// 1,3, 4, 6, 5