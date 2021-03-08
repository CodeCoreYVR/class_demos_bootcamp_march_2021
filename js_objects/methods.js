// Methods

function first(arr) {
  return arr[0];
}

const ArrayUtils = {
  last: function(arr) {
    return arr[arr.length - 1];
  },

  first: first,
  // syntax sugar for defining a method
  take(arr, n) {
    return arr.slice(0, n);
  },

  toObject(twoDArray) {
    // twoDArray looks like: [ ['a', 1], ['b', 2], ['c', 3] ];
    const obj = {};

    for (let pair of twoDArray) {
      // console.log(pair);
      // pair looks [key, value]: ['a', 1]
      obj[pair[0]] = pair[1]
    }

    return obj;
  }
}

// const testArray = [100, 200, 300, 400, 500];

// console.log(ArrayUtils.last(testArray));

// console.log(ArrayUtils.first(testArray));

// console.log(ArrayUtils.take(testArray, 2));

// const twoDArray = [ ['a', 1], ['b', 2], ['c', 3] ];

// console.log(ArrayUtils.toObject(twoDArray));

const counter = {
  step: 1,
  count: 0,
  set(count) {
    this.count = count
    return this;
  },
  inc() {
    this.count += this.step;
    return this;
  },
  dec() {
    this.count -= this.step;
    return this;
  },
  now() {
    console.log('this value:', this);
    console.log(this.count);
    return this;
  },
  setStep(step) {
    this.step = step;
    return this;
  }
}

// const counterCopy = Object.assign({}, counter);

// counter.inc()
// counter.inc()
// counter.now(); // what returns

// counterCopy.setStep(10)
// counterCopy.inc()
// counterCopy.inc()
// counterCopy.now(); // what returns

counter.inc().inc().setStep(10).inc().dec().dec().now()




