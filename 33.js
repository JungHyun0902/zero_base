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
console.log(nums.reverse(descending_order));

