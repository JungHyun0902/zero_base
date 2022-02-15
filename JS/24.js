// function callback_func () {
//   console.log("I'm callback function");
// }
// function higher_order_func (callback) {
//   console.log("I'm higher order function");
//   callback();
// }

// higher_order_func(callback_func);

// callback func example
function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

function calculator(callback, x, y) {
  return callback(x, y);
}

console.log(calculator(add, 3, 4));
console.log(calculator(sub, 5, 2));
console.log(calculator(mul, 12, 3));
console.log(calculator(div, 10, 2));