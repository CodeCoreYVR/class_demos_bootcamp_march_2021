
if(false){
    //typeof 'name' "" ``
    // function (){ // for fucntion JS interpreter looks for this sequence
    // }

    // [] // For Arrays JS interpreter look for square brackets
}
// DRY = Don't Repeat Yourself
// Funcitons provide us a way to reuse the code
if (false){
// Simple function
// 👇🏻 This is known as function declaration
function add(a,b){ // Keyword: function, function name: add , function arguments: a, b - surrounded by round brackets and then we have a 'body' of a function surrounded by curly braces.
    const total= a+b;
    return total; // return is a reserve-word which gives output of a function 
}
// Functions are called by round bracket or in other words when we use round brackets after the function name, that function is called
console.log(add(5,7));


5 //value
'naveed' // value
add // 👈🏻 function without call (or round brackets are )value

console.log('Today is Thursday');
console.log(add(5,7));
console.log(7+7)

console.log(add(add(2,3),3+6));
}
if(false){
// Arrays

let fruit1='apple';
let fruit2='banana';
let fruit3='grapes';

let arrFruits=['apple','banana','grapes'];
           //    0        1       2
[] // it consider it an array

// Arrays are defined by square brackets 
// the values inside  the array is seperated by comma
// the formal name of values inside an array is 'element'
// Each 'element' inside an array has an address starting from '0'
//  formal name of the address inside an array is 'index'
//Some Examples of an Array values:

[1,2,3,4,5,6] // Array with numbers as its element
['a','b','c','d','e'] // Array with strings
[add(),sub(),mul(),divide()]
[1,'a',b,'3','5',add()]
[[1,2],[4,5],['a','b'],['c',3]];

// Length of Arrays

[1,2,3,4,5,6].length// 6
['a','b','c','d','e'].length // 5
[add(),sub(),mul(),divide()].length //4
[[1,2],[4,5],['a','b'],['c',3]].length //4


// Accessing elements(values) of an array

const a=[1,2,3,4,5,6]
console.log(a[0]) // 1
console.log(a[4]) // 5
a[a.length-1] // 6
a[a.length-2]//5
a[a.length-3]//4

const multiDimensionalArray=[[1,2],[4,5],['a','b'],['c',3]]
multiDimensionalArray[0] //[ 1, 2 ]
multiDimensionalArray[0][1] //2
multiDimensionalArray[2][1] //'b'

const a=[1,2,3,4,5,6]
a.concat([6,7,8]) //[1, 2, 3, 4, 5,6, 6, 7, 8]
// Remember actual array will not be changed and will remain same as before concat

// a.slice(start,end(it will not incule end-index))
let newArray=[
  1, 2, 3, 4, 5,
  6, 6, 7, 8
]
newArray.slice(0)
[
    1, 2, 3, 4, 5,
    6, 6, 7, 8
]
newArray.slice(0,2) //[ 1, 2 ]
newArray.slice(0,5) //[ 1, 2, 3, 4, 5 ]
newArray.slice(0,7)//[1, 2, 3, 4,5, 6, 6]

newArray.slice(1,3) //[ 2, 3 ]
newArray.slice(-2) // [ 7, 8 ]


// Converting Arrays to String 
// .join()
newArray
[
  1, 2, 3, 4, 5,
  6, 6, 7, 8
]
> newArray.join('')
'123456678'
> typeof newArray.join('')
'string'
> newArray.join('|')
'1|2|3|4|5|6|6|7|8'
> typeof newArray.join('|')
'string'

let name='naveed'
undefined
> name.split('')
[ 'n', 'a', 'v', 'e', 'e', 'd' ]



// Changing the value of and array elements
newArray[0]=5 // this is how we can assign new values to the array element, we mutated index '0' of newArray

> newArray
[
  5, 2, 3, 4, 5,
  6, 6, 7, 8
]
> newArray[-1]
undefined
> newArray[-1]='What happened'
'What happened'
> newArray
[ 5, 2, 3, 4, 5, 6, 6, 7, 8, '-1': 'What happened' ]
> newArray[-1]
'What happened'
> newArray[99]='Again, What happened?'
'Again, What happened?'

> newArray
[
  5,
  2,
  3,
  4,
  5,
  6,
  6,
  7,
  8,
  <90 empty items>,
  'Again, What happened?',
  '-1': 'What happened'
]
> newArray[99]
'Again, What happened?'
}


if(false){
let b=[1,2,3,4,5]
undefined
// Array.shift()
> b[0]
1
> b.shift()
1
> b
[ 2, 3, 4, 5 ]
// Array.pop()
> b.pop()
5
> b.pop()
4
> b
[ 2, 3 ]

> b
[ 2, 3 ]
// Array.unshift()
> b.unshift(1)
3
// Array.push()
> b
[ 1, 2, 3 ]
> b.push(4)
4
> b
[ 1, 2, 3, 4 ]
> b.push(5)
5
> b
[ 1, 2, 3, 4, 5 ]
> b
[ 1, 2, 3, 4, 5 ]
> b
[ 1, 2, 3, 4, 5 ]
> Array.isArray(b)
true
> Array.isArray(1)
false
> Array.isArray(name)
false
> name
'naveed'
// .includes
> b
[ 1, 2, 3, 4, 5 ]
> b.includes(4)
true
> b.includes(10)
false
> 
}

