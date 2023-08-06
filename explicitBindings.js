// Call, Bind, Apply

// Q1) What is call?

var obj = { name: "shreyas" };

function sayHello(age) {
  return "Hello " + this.name + " is " + age + " years old.";
}

// console.log(sayHello());
// console.log(sayHello.call(obj, 24));

// Q2) what is apply?

var obj2 = { name: 'shreyas' };

function sayHello2(age, profession) {
  return "Hello " + this.name + " is " + age + " years old. and is an " + profession + "."; 
}

// console.log(sayHello2.apply(obj2, [24, 'engineer']));

// Q3) what is bind?

var obj3 = { name: 'shreyas' };

function sayHello3(age, profession) {
  return "Hello " + this.name + " is " + age + " years old. and is an " + profession + "."; 
}

const bindFunc = sayHello3.bind(obj);

// console.log(bindFunc(24, 'engineer'));

// Q4) Output based questions

const person = { name: 'shreyas' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

// console.log(sayHi.call(person, 24));
// console.log(sayHi.bind(person, 24));

const age = 10;

var person2 = {
  name: "shreyas",
  age: 20,
  getAge: function () {
    return this.age;
  },
};

var person3 = { age: 24 };
// console.log(person2.getAge.call(person3));

var status = "smile";

// setTimeout(() => {
//   const status = "love";

//   const  data = {
//     status: "avocado",
//     getStatus() {
//       return this.status;
//     },
//   };

  // console.log(data.getStatus());
  // console.log(data.getStatus.call(this));
// }, 0);

const animals = [
  { species: "Lion", name: "King" },
  { species: "whale", name: "Queen" }
];

function printAnimals(i) {
  this.print = function () {
    console.log("#" + i + " " + this.species + ": " + this.name);
  };
  this.print();
}

// Q5) append an array to another array

const array = ["a", "b"];
const elements = [0,1,2];

// array.push(...elements);
// array.push.apply(array, elements);
// console.log(array);

// Q6) find min / max number in an array

const numbers = [5, 6, 2, 3, 7];

// console.log(Math.max.apply(null, numbers))
// console.log(Math.min.apply(null, numbers))


function f() {
  console.log(this);
}

let user = {
  g: f.bind(null)
};

// user.g();

// ------------------------------- polyfills

// call polyfill

let car1 = {
  color: "blue",
  company: "lamborghini"
}

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
  )
}

Function.prototype.myCall = function (context = {}, ...args) {
  if(typeof this !== 'function') {
    throw new Error(this + "It's not callable");
  }

  context.fn = this;

  context.fn(...args);
}

Function.prototype.myApply = function (context = {}, args= []) {
  if(typeof this !== 'function') {
    throw new Error(this + "It's not callable");
  }

  if(!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLikeCalled on non-object")
  }

  context.fn = this;

  context.fn(...args);
}

Function.prototype.myBind = function (context = {}, ...args) {
  if(typeof this !== 'function') {
    throw new Error(this + "cannot be bound as it's not callable");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  }

}

// purchaseCar.call(car1, "Rs", 5000000);
// purchaseCar.myCall(car1, "Rs", 5000000);
// purchaseCar.myApply(car1, ["Rs", 5000000]);