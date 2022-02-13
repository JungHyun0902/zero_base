// 구구단
// for(var i=2; i<=9; i++) {
//   console.log(`${i}단`);
//   for(var j=2; j<=9; j++) {    
//     console.log(`${i}x${j}=${i*j}`);
//   }
//   console.log('');
// }


// const fs = require("fs");
// const input = fs.readFileSync("./input.txt", "utf8");

// console.log(input);

/* let 안녕 = '안녕하세요!';
let hi = 'Hi!';
let hello = 'Hello!';

console.log(안녕);
console.log(hi);
console.log(hello); */

/* let str = 'hello world!';
let num = 123;
let bool = true;
let arr = [1, 2, 3];
let a;

console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof arr); 
console.log(typeof a); */

// ch. 10 객체복사 문제점
let user = {
  name: 'john',
  age: 27,
  sizes: {
    height: 180,
    weight: 72
  }
};

/* 얕은 복사 1 - for loop
let admin = {};
for(let key in user) {
  admin[key] = user[key];
} */

/* 얕은 복사 2 - using Object
let admin = Object.assign({}, user);
*/

/* 얕은 복사 3 - using spread operator
let admin = { ...user };
*/
// 얕은 복사 문제점 - 객체 내 또다른 객체가 있다면 복사되지 않음

// 깊은 복사
// let admin = JSON.parse(JSON.stringify(user));

// admin.sizes.height++;
// admin.sizes.weight--;

// console.log(admin.sizes.height);
// console.log(user.sizes.height);
// console.log(admin.sizes.weight);

// admin.name = 'Kim';
// console.log(admin.name);
// console.log(user.name);

// admin.age = 34;
// console.log(admin.age);
// console.log(user.age);
let b = 6;
let c = 8;
let a = (b > c) ? b - c : c - b;

console.log(a);
