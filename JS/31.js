let fruits = ['apple', 'banana', 'orange'];
/*
let ret;
ret = fruits.splice(1);

console.log(ret); // [ 'banana', 'orange' ]
console.log(fruits); // [ 'apple' ]

fruits = ['apple', 'banana', 'orange', 'melon'];
ret = fruits.splice(2, 1);

console.log(ret); // [ 'orange' ]
console.log(fruits); // [ 'apple', 'banana', 'melon' ]

ret = fruits.splice(1, 1, 'mango', 'kiwi');
console.log(ret); // [ 'banana' ]
console.log(fruits); // [ 'apple', 'mango', 'kiwi', 'melon' ]
*/
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for(let fruit of fruits) {
  console.log(fruit);
}

for(let key in fruits) {
  console.log(fruits[key]);
}
