// Object destructuring:
// syntax sugar for quicky grabbing key-values from an object an saving them in variables.

const dog = {
  age: 10,
  name: 'bailey'
}

// const age = dog.age;
// const name = dog.name;
const { age, name } = dog;
console.log(age)
console.log(name);


const dogCopy = Object.assign({}, dog); // one way of copying

const dogCopy2 = {...dog}; // takes all the key value pairs of "dog" and copies it to empty object;

dog.age = 1;
dogCopy.age = 20;
dogCopy2.age = 30;
dogCopy.name = 'Winston'

console.log(dog)
console.log(dogCopy)
console.log(dogCopy2)