let number1=parseInt(process.argv[2]);
let number2=parseInt(process.argv[3]);
let number3=parseInt(process.argv[4]);

let largestNumber=number1

if (number2>largestNumber){
    largestNumber=number2
}
if(number3>largestNumber){
    largestNumber=number3
}
console.log(largestNumber)

// let x = process.argv[2]
// let y = process.argv[3]
// let z = process.argv[4]

// if ((x!== undefined) || (y!== undefined) || (z !== undefined)){
//     x = parseInt(process.argv[2]);
//     y = parseInt(process.argv[3]);
//     z = parseInt(process.argv[4]);
//     if (x > y && x > z){
//     console.log(x);
//     } else if (y > x && y > z) {
//     console.log(y);  
//     }else {
//     console.log(z);
//     }
// }else{
//     console.log("Please provide three different numbers")
// }
