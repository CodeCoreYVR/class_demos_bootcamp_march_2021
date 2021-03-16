const dog = {
  a: function a() {
    console.log(this)
  }
}

function a() {
  console.log(this);
}

// a()
// dog.a()


function invokeFn(fn) {
  fn()
}

invokeFn(dog.a)


// The value of this changes depending on the context of where/how it's being used
// https://www.w3schools.com/js/js_this.asp
// passinga method as a argument to a function seperates the method from the owner object so the value of this within that method is the global object NOT the owner object

