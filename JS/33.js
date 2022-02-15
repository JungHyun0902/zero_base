let nums = [1, -1, 4, 0, 10, 20, 12];

console.log(nums.sort());
console.log(nums.reverse());

function ascending_order (x, y) {
  return x - y;
}
function descending_order (x, y) {
  return y - x;
}

console.log(nums.sort(ascending_order));
console.log(nums.sort(descending_order)); // nums.reverse(descending_order)도 동일한 결과 ?!


let fruits = ['apple', 'Orange', 'melon', 'orange'];
console.log(fruits.sort()); // [ 'Orange', 'apple', 'melon', 'orange' ]

function a_order (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x > y) return 1;
  else if (y > x) return -1;
  else return 0;
}
function d_order (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if(x < y) return 1;
  else if (y < x) return -1;
  else return 0;
}
console.log(fruits.sort(a_order)); // [ 'apple', 'melon', 'Orange', 'orange' ]
console.log(fruits.sort(d_order)); // [ 'Orange', 'orange', 'melon', 'apple' ]


