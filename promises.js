// Promises in javascript
// synchronous and asynchronous code

// console.log('start');
// // console.log('in between');

// setTimeout(() => {
//   console.log('async code here');
// }, 0);

// console.log('end');

// console.log("start");
  
// function importantAction(username, cb) {
//   setTimeout(() => {
//     cb(`Subscribe to ${username}`);
//   }, 1000);
//     // return `Subscribe to ${username}`
// }

// const message = importantAction("shreyas", (message) => {
//   console.log(message)
// });

// console.log(message);

// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // const result = true;
//     const result = false;

//     if(result) resolve("Subscribe to shreyas")
//     else reject(new Error("why are you not subscribed yet!"))

//   }, 2000);
// })

// sub.then((res) => {
//   console.log(res)
// }).catch((e) => {
//   console.error(e)
// })

// console.log("stop");

// Promise.all([])
// Promise.allSettled([])
// Promise.race([])
// Promise.any([]);

// Asyn/await

// -------------------- Q1) Output

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(3);
// })

// promise1.then((res) => {
//   console.log(res);
// });

// console.log('end');

// ---

// console.log('start');

// const fn = () => new Promise((resolve, reject) => {
//   console.log(1);
//   resolve("success");
// });

// console.log('middle');

// fn().then((res) => {
//   console.log(res);
// });

// console.log('end');

// ---

// function job() {
//   return new Promise(function(resolve, reject) {
//     reject();
//   });
// }

// let promise = job();

// promise.then(function() {
//   console.log("success 1");
// })
// .then(function() {
//   console.log('success 2');
// })
// .then(function() {
//   console.log('success 3');
// })
// .catch(function() {
//   console.log('Error 1');
// })
// .then(function() {
//   console.log('success 4');
// });

// ---


// function job(state) {
//   return new Promise(function(resolve, reject) {
//     if(state) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   });
// }

// let promise = job(true);

// promise.then(function(data) {
//   console.log(data);
//   return job(false);
// })
// .catch(function(error) {
//   console.log(error);
//   return "Error caught";
// })
// .then(function(data) {
//   console.log(data);
//   return job(true);
// })
// .catch(function(error) {
//   console.log(error);
// })

// ---

// Promise chaining

const firstPromise = new Promise((resolve, reject) => {
  resolve("First!");
});

const secondPromise = new Promise((resolve, reject) => {
  resolve(firstPromise);
});

// secondPromise.then(res => res).then(res => console.log(res));

// ---

// rewrite using async / await

// function loadJSON(url) {
//   return fetch(url).then((res) => {
//     if(res.status === 200) {
//       return res.json();
//     } else {
//       throw new Error(res.status);
//     }
//   });
// }

// loadJSON("https://fakeurl.com/no-such-user.json").catch((err) => console.log(err));

// async function loadJSON(url) {
//   let response = await fetch(url);

//   if(response.status === 200) {
//     let json = await response.json();
//     return json;
//   }

//   throw new Error(response.status);
// }

// ---

// function prompRecurse(funcPromises) {
//   // Write Implementation here
//   if(funcPromises.length === 0) return;

//   const currPromise = funcPromises.shift();

// }

// ---------------------------- polyfills

// function PromisePolyfill(executor) {
//   let onResolve, onReject, isFullfilled = false, isRejected = false, isCalled = false, value;

//   function resolve(val) {
//     isFullfilled = true;
//     value = val;

//     if(typeof onResolve === 'function') {
//       onResolve(val);
//       isCalled = true;
//     } 

//   }

//   function reject(val) {
//     isRejected = true;
//     value = val;
//     if(typeof onReject === "function") {
//       onReject(val);
//       called = true;
//     }
//   }

//   this.then = function (callback) {
//     onResolve = callback;

//     if(isFullfilled && !isCalled) {
//       called = true;
//       onResolve(value);
//     }

//     return this;
//   };

//   this.catch = function (callback) {
//     onReject = callback;
    
//     if(isRejected && !isCalled) {
//       isCalled = true;
//       onReject(value);
//     }

//     return this;
//   }

//   try {
//     executor(resolve, reject)
//   } catch (error) {
//     reject(error);
//   }
// }

// const examplePromise = new PromisePolyfill((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// examplePromise.then((res) => {
//   console.log(res);
// }).catch((err) => console.error(err));

// PromisePolyFill.all = (promises) => {
//   let fulfilledPromises = [],
//     result = [];

//   function executor(resolve, reject) {
//     promises.forEach((promise, index) =>
//       promise
//         .then((val) => {
//           fulfilledPromises.push(true);
//           result[index] = val;

//           if (fulfilledPromises.length === promises.length) {
//             return resolve(result);
//           }
//         })
//         .catch((error) => {
//           return reject(error);
//         })
//     );
//   }
//   return new PromisePolyFill(executor);
// };


// --- Debounce 

const myDebounce = (cb, d) => {
  let timer;

  return function (...args) {
    if(timer) clearTimeout(timer);

    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

// --- Throttle

const myThrottle = (cb, d) => {
  let last = 0;

  return (...args) => {
    let now = new Date().getTime();
    if(now - last < d ) return;
    last - now;
    return cb(...args);
  };
};