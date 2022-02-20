// Set 
let set = new Set();
let num = new Set([1, 2, 3, 4, 5]);
let str = new Set('Hello!');

console.log(set); // Set(0) {}
console.log(num); // Set(5) { 1, 2, 3, 4, 5 }
console.log(str); // Set(5) { 'H', 'e', 'l', 'o', '!' } - 중복 X 

set.add(1).add(1).add(10).add(20); 
console.log(set); // Set(3) { 1, 10, 20 }
console.log(set.has(2)); // false
console.log(set.has(10)); // true

set.delete(1); // 1 삭제 
console.log(set); // Set(2) { 10, 20 }

// Set 반복
for(let item of str) {
  console.log(item);
}
/* 
H
e
l
o
!
*/


