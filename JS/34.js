let nums = [1, 2, 3, 4, 5];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

nums.forEach(function(i) {
  console.log(i);
});

// for loop
let use_for_loop = [];
for (let i = 0; i < nums.length; i++) {
  use_for_loop.push(nums[i]*2);
}
console.log(use_for_loop);

// use map
let use_map = nums.map(function (i) {
  return i * 2;
});
console.log(use_map); //[ 2, 4, 6, 8, 10 ]

// find와 filter 
let users = [
  {name: 'john', age: 17, job: false},
  {name: 'bob', age: 20, job: false},
  {name: 'alice', age: 27, job: true}    
];

// find - 콜백함수의 조건을 만족하는, 단 하나의 값만 반환
let find_job = users.find(function(user) {
  return user.job == false;
});
console.log(find_job); // { name: 'john', age: 17, job: false }

let find_age = users.find(function(user) {
  return user.age >= 19;
});
console.log(find_age); // { name: 'bob', age: 20, job: false }

// filter - 콜백함수의 조건을 만족하는 값을 배열로 반환
let filter_job = users.filter(function(user) {
  return user.job == false;
});
console.log(filter_job);
/*
[
  { name: 'john', age: 17, job: false },
  { name: 'bob', age: 20, job: false }
]
*/

let filter_age = users.filter(function(user) {
  return user.age >= 19;
});
console.log(filter_age);
/*
[
  { name: 'bob', age: 20, job: false },
  { name: 'alice', age: 27, job: true }
]
*/