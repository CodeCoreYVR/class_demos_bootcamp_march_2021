
// console.log(process.argv[2]);
// console.log(process.argv[3]);
let firstName=process.argv[2];
let lastName=process.argv[3];
console.log(`My name is ${firstName} ${lastName}`)

// if(firstName.length > 3){
//     console.log('burn them all')
// }else if(lastName.length > 5){
//     console.log('Be nice to them!')
// }else{
//     console.log('feed them cake')
// }
// ternary operators condition ? true : false  
firstName.length > 3 ? console.log('burn them all') : console.log('Be nice to them!')

// let i=5 
// while(i > 0){
// console.log(`My name is ${firstName} ${lastName}`)
// i--; // i = i -1
// }


console.log('This is for loop 👇🏻')
// x++ // x = x + 1👇🏻

for (let x=5; x > 0; x-- ){
    console.log(`My name is ${firstName} ${lastName}`)
}








