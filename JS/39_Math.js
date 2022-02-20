console.log(Math.max(1, -1)); // 1
console.log(Math.min(1, -1)); // -1

console.log(Math.max(-1, 0, -4, 10, 89)); // 89
console.log(Math.min(-1, 0, -4, 10, 89)); // -4

let nums = [1, -2, 0, 3, 5, 14];
console.log(Math.max(nums)); // NaN
// apply
console.log(Math.max.apply(null, nums)); // 14
console.log(Math.min.apply(null, nums)); // -2
// spread
console.log(Math.max(...nums)); // 14
console.log(Math.min(...nums)); // -2

// property
console.log(Math.E);
console.log(Math.PI);

// random
for(let i = 0; i < 10; i++) {
  console.log(Number.parseInt(Math.random() * 100));
}

// pow
console.log(Math.pow(2,3)); // 8
console.log(2 ** 3); // 8

// sqrt
console.log(Math.sqrt(4)); // 2
console.log(Math.sqrt(100)); // 10

// round(소수점 이하 반올림), ceil(소수점 이하 올림), floor(소수점 이하 내림)
console.log(Math.round(3.5)); // 4
console.log(Math.round(3.2)); // 3
console.log(Math.round(-3.7)); // -4
console.log(Math.round(-3.2)); // -3

console.log(Math.ceil(3.5)); // 4
console.log(Math.ceil(3.2)); // 4
console.log(Math.ceil(-3.7)); // -3
console.log(Math.ceil(-3.2)); // -3

console.log(Math.floor(3.5)); // 3
console.log(Math.floor(3.2)); // 3
console.log(Math.floor(-3.7)); // -4
console.log(Math.floor(-3.2)); // -4