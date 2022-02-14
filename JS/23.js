function factorial(x) {
  if(x == 0) return 1;
  return x * factorial(x - 1);
}

const num = 5;
let result = factorial(num);
console.log(`The factorial of ${num} is ${result}`);