// Bad Approach

const me = {
  talk() {
    return 'talking';
  }
}

const you = {
  talk() {
    return 'talking';
  }
}

// console.log(me.talk());
// console.log(you.talk());

// Good Approach

class Person {
  talk() {
    return 'talking';
  }
}

const classMe = new Person();
const classYou = new Person();

// console.log(classMe.talk());
// console.log(classYou.talk());

