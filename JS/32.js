let fruits = ['apple', 'banana', 'melon'];
let str = fruits.join(); 
console.log(fruits); // [ 'apple', 'banana', 'melon' ]
console.log(str); // apple,banana,melon

str = fruits.join(';'); 
console.log(str); // apple;banana;melon
console.log(str.split(';')); // [ 'apple', 'banana', 'melon' ]
