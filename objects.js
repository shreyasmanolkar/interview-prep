// Everything in javascript is an object

const user = {
  name: "shreyas manolkar",
  age: 24,
  "like this repo": true
};

// user.name = "shreyas";
// delete user.age;
// console.log(user);

const func = (function (a) {
  delete a;
  return a;
})(5);

// console.log(func);

// Q1) what will be the output?

const obj = {
  a: "one",
  b: "two",
  a: "three"
};

// console.log(obj);

// Q2) Create a function multiplyByTwo(obj) that multiplies all numberic property values of nums by 2.

let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

multiplyByTwo(nums);

function multiplyByTwo(obj) {
  for(key in nums) {
    if(typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

// console.log(nums);

// Q3) What's the Output of the following code?

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

// console.log(a[b]);

// Q4) What's the output?

// console.log([..."shreyas"]);

const user2 = {
  name: "shreyas",
  age: 24
};

const admin = {
  admin: true,
  ...user2
};

// console.log(admin);

const settings = {
  username: "shreyas",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data);

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

// console.log(shape.diameter());
// console.log(shape.perimeter());

let c2 = { greeting: "hey!" };
let d;

d = c;

c.greeting = "hello";

// console.log(d.greeting);

// console.log({ a: 1 } == { a: 1 });
// console.log({ a: 1 } === { a: 1 });


let person = { name: "shreyas" };
const members2 = [person];
person = null;

// console.log(members2);

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

// multiply();
// multiply();
// multiply(value);
// multiply(value);

function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "john",
    age: 50
  };

  return person;
}

const personObj1 = {
  name: "Alex",
  age: 30,
};

const personObj2 = changeAgeAndReference(personObj1);

// console.log(personObj1);
// console.log(personObj2);

// Q5) shallow vs deep copy

let user3 = {
  name: "shreyas",
  age: 24
};

// const objClone = Object.assign({}, user3);
// const objClone2 = JSON.parse(JSON.stringify(user3));
const objClone3 = { ...user3 };

// console.log(objClone);
// console.log(objClone2);
console.log(objClone3);