
// map

const nums = [1, 2, 3, 4];

const multiplyThree = nums.map((num) => num * 3);

// console.log(multiplyThree);

// filter

const nums2 = [1, 2, 3, 4, 5, 6];

const evenNums = nums2.filter((num) => num % 2 === 0);

// console.log(evenNums);

// reduce

const nums3 = [1, 2, 3, 4, 5, 6];

const sum = nums3.reduce((acc, curr) => {
  return acc + curr
}, 0);

// console.log(sum);

// --------------------------- polyfills

// map

// Array.map((val, index, array) => {})

Array.prototype.myMap = function (cb) {
  const temp = [];

  for(let i = 0; i < this.length; i++){
    temp.push(cb(this[i], i, this));
  }

  return temp;
};


// const multiply2 = nums.map((num) => num * 2);
// console.log(multiply2);

// const myMultiply = nums.myMap((num) => num * 2);
// console.log(myMultiply);


// filter

Array.prototype.myFilter = function (cb) {
  const temp = [];

  for(let i = 0; i < this.length; i++) {
    if(cb(this[i], i, this)) temp.push(this[i]);
  }

  return temp;
}

// const evenNums2 = nums.filter((num) => num % 2 === 0);
// console.log(evenNums2);

// const myEvenNums = nums.myFilter((num) => num % 2 === 0);
// console.log(myEvenNums);


// reduce

// arr.reduce(( accumulator, value ,index , arr) => {}, initialValue)

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;

  for (let i= 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
}

const sum2 = nums3.reduce((acc, curr) => {
  return acc + curr
}, 0);

// console.log(sum2);

const mySum = nums3.myReduce((acc, curr) => {
  return acc + curr
}, 0);

// console.log(mySum);


// ---------------------------------------------- exercise

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

// Q1) return only name of students in capital letters

const capitalLetters = students.map((student) => student.name.toUpperCase())
// console.log(capitalLetters);

// Q2) return only the details of those students who scored more than 60 marks

const distinction = students.filter((student) => student.marks > 60);
// console.log(distinction);

// Q3) return only the details of those students who scored more than 60 marks and roll number gretter than 15

const distinction2 = students.filter((student) => student.marks > 60 && student.rollNumber > 15);
// console.log(distinction2);

// Q4) calculate sum of marks of all of these students

const sumMarks = students.reduce((acc, student)=> acc + student.marks, 0);
// console.log(sumMarks);

// Q5) return only names of student who scored more than 60

const toppers = students.filter((student) => student.marks > 60).map(student => student.name);
// console.log(toppers);

// Q6) return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

const totalMarks = students.map((student) => {
  if(student.marks < 60) {
    student.marks += 20;
  }

  return student;
}).filter((student) => student.marks > 60).reduce((acc, curr) => acc + curr.marks, 0);
// console.log(totalMarks);