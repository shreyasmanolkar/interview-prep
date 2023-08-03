# Javascript

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

