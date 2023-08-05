// currying
// example f(a,b) into f(a)(b)

function f(a) {
  return function (b) {
    return `${a} ${b}`;
  }
}

// console.log(f(1)(2))

// Q1) sum(2)(6)(1)

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}

// console.log(sum(2)(6)(1));

// Q2) 
// evaluate("sum")(4)(2) => 6
// evaluate("multiply")(4)(2) => 8
// evaluate("divide")(4)(2) => 2
// evaluate("substract")(4)(2) => 2

function evaluate(operation) {
  return function(a) {
    return function (b) {
      if(operation === "sum") return a + b;
      else if(operation === "multiply") return a * b;
      else if(operation === "divide") return a / b;
      else if(operation === "substract") return a - b;
      else return "Invalid operation";
    }
  }
}

// console.log(evaluate("sum")(4)(2));
// console.log(evaluate("multiply")(4)(2));
// console.log(evaluate("divide")(4)(2));
// console.log(evaluate("substract")(4)(2));

const mul = evaluate("multiply");
// console.log(mul(10)(9));


// Q3) Infinite Currying => sum(1)(2)(3)....(n)


function add(a){
  return function (b) {
    if(b) return add(a + b);
    return a;
  }
} 

// console.log(add(5)(2)(4)(5)());

// Q4) Currying vs Partial application

function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

const x = sum(10);
// console.log(x(5, 6));
// console.log(x(3, 2));

// Q5) Manipulating DOM

function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  }
}
// Q6) Curry implemetation

function curry(func) {
  return function curriedFunc(...args) {
    if(args.length >= func.length) {
      return func(...args);
    } else {
      return function(...next) {
        return curriedFunc(...args, ...next);
      }
    }
  }
}

const sum2 = (a, b, c) => a + b + c;

const totalSum = curry(sum2);

// console.log(totalSum(1)(2)(3));