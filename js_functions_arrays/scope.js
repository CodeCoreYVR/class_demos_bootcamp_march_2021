// //Shadowing
// let j='hello-1'
// if (true){
//     let i='hello' + j
//     if (true){
//         let i='hello world'
//         // console.log(i);    
//     }
//     console.log(i); 
    
// }


// // console.log(i);   

// // function add(){
// //     var num =4
// //     console.log(num);
// // }
// // add()

//  IIFE(Imediately Invoked Funciton Expression)
(function(){
    var i='Hello';
})();
console.log(i);