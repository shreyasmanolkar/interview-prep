// var vs let vs const 
// scope

// global scope 
var varA = 5;
let letA = 3
const constA = 2

{
  // block scope
  var varB = 5;
  let letB = 3;
  const constB = 3;
}


// console.log(varA);
// console.log(varB);

// console.log(letA);
// this will give error as letB is not defined
// console.log(letB);

// console.log(constA);
// this will give error as constB is not defined
// console.log(constB);

var x = 10;

if(true) {
  var x = 20;
}

console.log(x); // Outputs 20 because the scope of x is the entire function or global scope.


let y = 10;

if(true) {
  let y = 20;
}

console.log(y); // Outputs 10 because the scope of y is limited to the block inside the if statement.
