function Dog(name, age) {
  // this is a new object {}. That is empty.
  this.name = name; // { name: 'bailey'}
  this.age = age; // { name: 'bailey', age: 5 }
}

Dog.prototype.bark = function() {
  return `${this.name} barks: woof woof!`
}

function DogFighter(name, age, specialAbility) {
  this.name = name;
  this.age = age;
  this.specialAbility = specialAbility
}

// We wan't doggo fighters to inherit the methods of a normal dog
// we will need to set the Prototype of DogFighter's Prototype to be Dog's Prototype
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
Object.setPrototypeOf(DogFighter.prototype, Dog.prototype);
// This method will set the prototype of the first argument to the second argument



DogFighter.prototype.fight = function(dog) {
  // this.name = this dog's name
  // dog.name  = the dog we're fighting
  if (!(dog instanceof DogFighter)) {
    throw new Error('You can not fight dogs that are not meant to fight')
  }
  const winner = [this.name, dog.name][Math.floor(Math.random() * 2)] // random number between 0 and 1
  return `${winner} won!`;
}

// Classes
// Classes are syntax sugar for creating constructors and prototoypes

// Class version of Dog constructor
class CDog {
  // construcor is a special method that replaces the constructor function
  // this is what gives invoked when you create a new instance of the class/constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // all methods listed within the class are automatically attatched to the prototype
  bark() {
    return `${this.name} barks: woof woof!`
  }
}

// Class version of DogFighter

// To inherit using class syntax we use the "extends" keyword
class CDogFighter extends CDog {
  constructor(name, age, specialAbility) {
    // super is a keyword available within classes
    // super references the parent class
    // calling super inside of the constructor will call the constructor of the parent class
    super(name, age);
    this.specialAbility = specialAbility;
  }

  fight(dog) {
    if (!(dog instanceof DogFighter)) {
      throw new Error('You can not fight dogs that are not meant to fight')
    }
    const winner = [this.name, dog.name][Math.floor(Math.random() * 2)] // random number between 0 and 1
    return `${winner} won!`;
  }
}

const bobBuilder = new CDog("Bob Builder", 11);
const drillBitDarel = new CDogFighter("Drill Bit Darel", 7, "Drill!");






