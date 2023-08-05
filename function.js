// Functions in Javascript

function square(num) {
  console.log(num * num);
}

// square(5);

// (function square2(num) {
//   console.log(num * num);
// })(6);

// Q1) explain

// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(2);
// })(1);

// Q2) 

// for(var i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, i * 2000);
// };

// Q3)

var x = 21;

var fun = function () {
  console.log(x);
  var x = 20;
};

// fun();

// Q6)

const fn = (a, x, y, ...numbers) => {
  console.log(x, y, numbers);
}

// fn(1,2,3,4,5,6,7,8,9);

// --- arrow function

// synatax
function square(num) {
  return num * num;
}

const arrowSquare = (num) => {
  return num * num;
}

//  implicit this keyword

// (num) => num * num;

// this keyword

let user = {
  userName: "Shreyas",
  rc1: () => {
    console.log("welcome " + this.userName );
  },
  rc2() {
    console.log("welcome " + this.userName);
  }
};

user.rc1();
user.rc2();


