// 등차수열(1) - for문 이용
let result;

function forloop(s, t, number) {  
  let acc = 0;

  for(let i = 1; i <= number; i++){
    if(i == 1) {
      acc += s;
    } else {
      acc += t;
    }
  }
  return acc;
}

result = forloop(3, 2, 5);
console.log(result);

// 등차수열(2) - recursive
function arithmetical(s, t, number) {
  if(number == 1) {
    return s;
  }
  
  return arithmetical(s, t, number-1) + t;
}

result = arithmetical(3, 2, 5);
console.log(result);
// 등비수열도 동일한 원리 ㅇㅋ? 

// 팩토리얼 - recursive 
function factorial(number) {
  if(number == 1) {
    return number;
  } 
  return number * factorial(number-1); 
}

console.log(factorial(5));

//피보나치 수열 
function fibonacci(number) {
  if(number == 1 || number == 0) {
    return number;
  }
  // f(n) = f(n-1) + f(n-2)
  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(11));