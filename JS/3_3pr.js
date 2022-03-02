/* 수열 최소값 위치 */

/* user code */
function answer(nums) {
  let result = [];

  // 코드 구현 시작 영역
  let min;
  for (let i = 1;  i < nums.length; i++) {
    if (nums[i-1] <= nums[i]) {
      min = nums[i-1];
    }
  }
  /* 1. 배열의 최솟값 구하기 
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if(min > nums[i]) {
      min = nums[i];
    }
  }
  */
  for (let i = 0; i < nums.length; i++ ) {
    if ( nums[i] == min) {
      result.push(i);
    } 
  }
  /* 2. 배열의 최솟값 인덱스 
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] == min) {
      result[count] = i;
      count++;
    }
  }
  */

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  [5, 2, 10, 2],

  // TC: 2
  [4, 5, 7, 4, 8],

  // TC: 3
  [12, 11, 11, 16, 11, 12],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
