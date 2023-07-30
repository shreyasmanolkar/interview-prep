// approach 1 --------------------

// Contructor Function
function Person () {}

Person.prototype.talk = function() {
  return 'talking';
}

const me = new Person();

console.log(me);
// console.log(me.talk());

// approach 2 --------------------

function Person2() {
  this.talk = function () {
    return 'talking';
  }
}

const me2 = new Person2();

console.log(me2);
// console.log(me2.talk());