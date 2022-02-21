let array = [
  [101, 102, 103],
  [201, 202, 203],
  [301, 302, 303]
];

console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 301, 302, 303 ] ]
console.log(array[0]); // [ 101, 102, 103 ]
console.log(array[0][2]); // 103
console.log(array[2][2]); // 303

let arr_2 = array.pop();
console.log(array.length); // 2
console.log(arr_2); // [ 301, 302, 303 ] 
console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ] ]

let array_num = array.push([401, 402, 403]);
console.log(array.length); // 3
console.log(array_num); // 3 (push를 했을때 length를 return)
console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 401, 402, 403 ] ]


// for loop를 사용한 2차원 배열 접근 

let array = [[101, 102, 103], [201, 202, 203], [301, 302, 303]];

for(let i = 0; i < array.length; i++) {
  for(let j = 0; j < array[i].length; j++) {
    console.log(array[i][j]);
  }
}
/*
101
102
103
201
202
203
301
302
303
*/
let fruits = [
  ['strawberry', 150],
  ['banana', 100],
  ['ice', 120]
];

for(let i = 0; i < array.length; i++) {
  console.log(`ingredient: ${fruits[i][0]}, amount: ${fruits[i][1]}`);
}
/*
ingredient: strawberry, amount: 150
ingredient: banana, amount: 100
ingredient: ice, amount: 120
*/