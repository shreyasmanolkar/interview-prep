# Javascript

## Fundamental

### Scope
Scope in JavaScript refers to the accessibility and visibility of variables, functions, and objects within the code. It determines where in the code a variable or function can be accessed or modified. 
There are two main types of scope:

1- Global Scope: Variables declared outside of any function have global scope and can be accessed from anywhere in the code, including inside functions.

2- Local Scope: Variables declared inside a function have local scope and are only accessible within that function or in nested functions inside it.

The scope in JavaScript helps in organizing and encapsulating code, preventing variable collisions, and managing the lifetime of variables.

### var, let & const

1 - var:

- var is the oldest way to declare variables in JavaScript.
- Variables declared with var are function-scoped, meaning they are only  accessible within the function where they are defined or in the global  scope if declared outside any function.
- Hoisting: Variables declared with var are hoisted to the top of their scope, which means you can access them before they are declared, but they will have the value undefined.
- Can be reassigned: You can change the value of a var variable after it has been declared.

2 - let:

-let was introduced in ECMAScript 6 (ES6) and is a block-scoped variable declaration.
-Variables declared with let are block-scoped, meaning they are accessible only within the block (a set of curly braces {}) where they are defined.
-Hoisting: let variables are also hoisted, but they are not initialized until the code execution reaches their declaration.
-Can be reassigned: let variables can be reassigned a new value.

3 - const:

- const was also introduced in ES6.
- Variables declared with const are block-scoped and behave similarly to let, but they have an important distinction - they are constants, meaning their value cannot be changed after declaration.
- It's important to note that const only makes the binding (the reference to the value) immutable, not the value itself. If the value is an object or an array, its properties or elements can still be modified.

### Variable Shadowing
Variable shadowing occurs when a variable with a certain name is declared within a scope that already contains a variable with the same name. The newly declared variable "shadows" or takes precedence over the outer variable, effectively hiding it within the inner scope.
While shadowing the variable it should not cross the boundary of scope. i.e. we can shadow var variable by using let, but cannot do the opposite.


### Hoisting
It refers to the process of moving variable and function declarations to the top of their containing scope during the compilation phase, before the actual code execution. 

When a variable is declared using the var keyword, its declaration is hoisted to the top of the current function or global scope. However, only the declaration is hoisted, not the initialization. Initialization remains in place, and if the variable is accessed before the assignment, it will have the value undefined.

It's important to note that hoisting only applies to declarations and not initializations. Additionally, hoisting with let and const variables works slightly differently compared to var. While they are hoisted, they are not initialized to undefined but are in temporal dead zone (TDZ), and accessing them before the actual declaration will result in a ReferenceError.

Function declarations are hoisted in their entirety, meaning both the function name and the function body are hoisted to the top of the scope. This allows you to call a function before its actual declaration in the code.

### Temporal dead zone
Temporal dead zone is where a variable is inaccessible until the moment the computer initializes it with a value.

### Map 
map is a higher-order array method that is used to transform elements of an array and create a new array based on the transformation. It takes a callback function as an argument, which is called for each element in the original array. The callback function can modify the elements and return new values that will be used to create a new array.

### Filter
filter() is higher-order array method that allows to create a new array containing elements from the original array that meet a specific condition. It iterates through each element of the array and calls a callback function for each element. If the callback function returns true for an element, that element is included in the new array; otherwise, it is excluded.

### Reduce 
reduce() method is a powerful higher-order array method that is used to reduce an array to a single value. It iterates through the elements of the array and accumulates a result by applying a callback function to each element. 

#### map vs forEach

- map():
Purpose: map() is used to transform elements of an array and create a new array with the transformed values. It takes a callback function as an argument and applies that function to each element in the array, creating a new array based on the return values of the callback function.
Return value: map() returns a new array containing the results of the transformation performed by the callback function on each element of the original array.
Does not modify the original array: map() does not change the original array; it only creates a new array with the transformed values.
we can chain other methods after map.

- forEach():
Purpose: forEach() is used to iterate over the elements of an array and perform a specified action or side effect for each element. It takes a callback function as an argument and applies that function to each element in the array.
Return value: forEach() does not return anything; it always returns undefined.
Does not create a new array: Unlike map(), forEach() does not create a new array. It is primarily used when you want to perform some action for each element in the array, such as updating the elements or logging them to the console.

## Functions

#### Function declaration
A function declaration defines a named function that can be called later in the code.

#### Function expression
you can create anonymous functions (functions without a name) using function expressions. They can be assigned to variables or used as callback functions. 

#### First class functions
In a language where a function can be treated like a variable their functions are called as first class functions. in this cases functions can be passed into another functions can be used manipulated and returned from those functions and basically everything that a variable can do a function can also do. 

#### What is IFFE?
IFFY stands for immediately invoked function expressions.

#### Spread 
The spread operator is used to split an array or an object into individual elements. It is commonly used in array literals or function calls to "spread" the elements of an array or object into individual elements.

#### Rest Parameter
The rest parameter is used in function definitions to represent an indefinite number of arguments as an array.

### Callback function
In JavaScript, a callback function is a function that is passed as an argument to another function and is executed or called inside that function. The primary purpose of using a callback function is to ensure that certain code or tasks are executed only after the completion of another task or asynchronous operation.

### Arrow function
Arrow functions, introduced in ECMAScript 6 (ES6), are a concise and convenient way to define functions in JavaScript.

Key points about arrow functions:

Shorter syntax: Arrow functions provide a shorter syntax compared to regular function expressions, making the code more concise and easier to read.

Lexical this binding: Unlike regular functions, arrow functions do not have their own this value. Instead, they inherit the this value from the surrounding context (i.e., the context in which the arrow function is defined). This feature is called "lexical scoping."

No arguments object: Arrow functions do not have their own arguments object. Instead, you can use the rest parameter syntax (...args) to gather all the function arguments into an array.

## Closure
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

### Lexical Scope
lexical scope means a variable defined outside the function can be accessible inside of another funcition defined after a variable declaration.


### currying 
currying is a function that takes one argument at a time and returns a new function expecting the next argument.

it is the conversion of function from callable as f(a,b) to this f(a)(b)

and currying functions are constructed by chaining closure by immediately returning their inner functions simultaneously.

#### why use currying
✅ It makes a function pure which makes it expose to less errors and side effects.

✅ It helps in avoiding the same variable again and again.

✅ It is a checking method that checks if you have all the things before you proceed.

✅ It divides one function into multiple functions so that one handles one set of responsibility.

#### Partial application
Partial application transform a function into another function with small arity (number of operands or the number of arguments a function receives).

## Objects

### Object binding
there are 2 way to bind objects in javascript.
1 - implicit
2 - explicit

implicit binding is applied when we invoke a function in an object using the dot notation. this keyword in such scenarios will point to the object using which the function was invoked or simply the object on the left hand side of the dot.

explicit binding can be applied using call, bind and apply.


#### 'this' keyword
this refer to th object that is executing the current function.

## call, bind, apply

### call
In JavaScript, a "call" is a method that allows you to invoke a function with a specified "this" context and arguments. It is used to call a function that belongs to an object while setting the value of "this" explicitly or to borrow a method from one object and use it for another.

### apply
"apply" method is another way to invoke a function with a specified "this" context and arguments, similar to the "call" method. It allows you to call a function that belongs to an object, but instead of passing individual arguments, you pass an array (or an array-like object) of arguments.

### bind
"bind" method is used to create a new function with a specified "this" context. It allows you to permanently associate a specific object as the "this" value inside the function, regardless of how the function is called later. This is particularly useful when you want to pass a method as a callback, maintain a specific context, or create a partially applied function with preset arguments. 


## Promises


### Event Deligation
### Event Propogation
### Event Bubbling
### Event Trickling
### Event Capturing
### Event Capturing