function Person (age, name, gender) {
  this.age = age;
  this.name = name;
  this.gender = gender;
}

Person.prototype.run = function () {
  return 'run';
};

Person.prototype.talk = function () {
  return 'talk';
};

Person.prototype.walk = function () {
  return 'walk';
};

Person.prototype.smile = function () {
  return 'smile';
};