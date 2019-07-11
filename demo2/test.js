const myPromise = require('./myPromise');

// test case1
new myPromise((resolve, reject) => {
  resolve('value');
}).then(val => console.log(val));

// test case2
new myPromise((resolve, reject) => {
  reject('something is error!');
}).then(val => console.log(val), err => console.log(err));

// test case3
new myPromise((resolve, reject) => {
  reject('something is error!');
}).then(val => console.log(val));

// test case4
let myResolve4;
new myPromise((resolve, reject) => {
  myResolve4 = resolve;
}).then(val => console.log(val));
myResolve4('test case4 myResolve4.');

// test case5
let myResolve5;
const myPromise5 = new myPromise((resolve, reject) => {
  myResolve5 = resolve;
});
myPromise5.then(val => console.log(val));
myResolve5('test case4 myResolve5.');

// test case6
let myResolve6;
const myPromise6 = new myPromise((resolve, reject) => {
  myResolve6 = resolve;
});
myResolve6('test case4 myResolve6.');
myPromise6.then(val => console.log(val));