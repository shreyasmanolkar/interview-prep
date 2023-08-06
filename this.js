// 'this' keyword in javascript ( Implicit Binding )
//  Explain 'this' keyword.

let user = {
  name: 'shreyas',
  age: 24,
  // getDetails() {
  //   console.log(this.name);
  //   // console.log(this);
  // },
  // childObj: {
  //   newName: 'Shree',
  //   getDetails() {
  //     console.log(this.newName,"and", this.name);
  //     // console.log(this);
  //   },
  // }
  // getDetails: () => {
  //   // console.log(this.name);
  //   console.log(this);
  // }
  getDetails() {
    const nsetedArrow = () => console.log(this.name);
    nsetedArrow();
  }
};

// user.getDetails();
// user.childObj.getDetails();
// user.getDetails();

// ===> arrow ------------------------------------
// in arrow function this keyword value of arrow function comes from it's parent function. 


class User {
  constructor(n) {
    this.name = n;
  }

  getName() {
    console.log(this.name);
  }
}

const user2 = new User("shreeyas");

// console.log(user2);
// user2.getName();

// Q1) What is the output?

const user4 = {
  firstName: "shreyas",
  getName() {
    const firstName = "shreyas manolkar";
    return this.firstName;
  },
};

// console.log(user4.getName());

// Q2) What is the result of accessing its ref? why?

function makeUser() {
  return {
    name: "shreyas",
    // ref: this,
    ref() {
      return this;
    }
  };
}

let user5 = makeUser();

// console.log(user5.ref().name);
// console.log(user5);

const user6 = {
  name: "shreyas manolkar",
  logMessage() {
    console.log(this.name);
  }
};

// setTimeout(user6.logMessage, 1000);
// setTimeout( function () {
  // user6.logMessage();
// }, 1000);


//  Q3) 

const user7 = {
  name: "shreyas",
  greet() {
    return `Hello, ${this.name}`;
  },
  farewell: () => {
    return `GoodBye, ${this.name}!`;
  },
};

// console.log(user7.greet());
// console.log(user7.farewell());

//  Q5) create object calculator

// let calculator = {
//   read() {
//     this.a = +prompt("a = ", 1);
//     this.a = +prompt("b = ", 2);
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   }

// }

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// Q6) 

var length = 4;
// this.length = 4;

function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(fn) {
    fn();
  },
};

object.method(callback);