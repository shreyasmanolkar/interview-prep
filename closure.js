// closure

function subscribe() {
  var name = "Shreyas Manolkar";

  function displayName() {
    console.log(name);
  }
  displayName();
}

// subscribe();

// ex 1

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

// console.log(sum(1)(2)(3)(4)); // 20

// Q1) What will be logged to console?

// let count = 0;

// (function printCount() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count);
//   }
  
//   console.log(count);
// })()

// Q2) Write a function that would allow you to do this.

var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

// solution 

function createBase(num) {
  return function(innerNum) {
    console.log(num + innerNum);
  }
}

// Q3) Time Optimization

// function find(index){
//   let a = [];
//   for(let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }
//   console.log(a[index]);
// }

// console.time("6");
// find(6);
// console.timeEnd('6');

// console.time("50");
// find(50);
// console.timeEnd('50');

// function find(){
//   let a = [];
//   for(let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }
  
//   return function(index) {
//     console.log(a[index]);
//   }
// }

// const closure = find();
// console.time("6");
// closure(6);
// console.timeEnd('6');

// console.time("50");
// closure(50);
// console.timeEnd('50');

// Q4) Block scope and setTimeout

// for(var i = 0; i < 3; i++) {

//   function inner(i) {
//     setTimeout(function log() {
//       console.log(i); 
//     }, 1000);
//   }

//   inner(i);
// }


// Q5) How would you use a closure to create private counter? 

function counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrive() {
    return "Counter = " + _counter;
  }

  return {
    add,
    retrive
  }
}

const c = counter();

c.add(5);
c.add(10);

// console.log(c.retrive());

// Q6) module pattern

var Module = (function () {
  function privateMethod() {
    // do something
  }

  return {
    publicMethod: function () {
      // can call privateMethod();
    }
  }
})

// Q7) Make this run only once

let view;
function likeTheVideo() {
  let called = 0;

  return function () {
    if(called > 0) {
      console.log('already subscribed to shreyas');
    } else {
      view = "shreyas";
      console.log("Subscribe to", view);
      called++;
    }
  }
}

let isSubscribed = likeTheVideo();

// isSubscribed();
// isSubscribed();
// isSubscribed();

// Q8) Once polyfill

function once(func, context) {
  let ran;

  return function() {
    if(func) {
      ran = func.apply(context || this, arguments);

      func = null;
    }

    return ran;
  };
}

const hello = once(() => console.log('hello'))

// hello();
// hello();
// hello();
// hello();
// hello();

// Q9) Memoize polyfill

function myMemoize(fn, context) {
  const res = {};

  return function (...args) {
    var argsCache = JSON.stringify(args);
    
    if(!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    } 
    
    return res[argsCache];
  }
}

const clumsySquare = (num1, num2) => {
  for(let i = 1; i <= 100000000; i++) {}

  return num1 * num2;
};

const memoizedClumsyProduct = myMemoize(clumsySquare);

// console.time('First call');
// console.log(memoizedClumsyProduct(9467, 7649));
// console.timeEnd('First call');

// console.time('First call');
// console.log(memoizedClumsyProduct(9467, 7649));
// console.timeEnd('First call');

// Q10) difference between closure and scope

// when ever we create a function whithin another function then the inner function is the closure.
// scope in js defines what variable you have access to.