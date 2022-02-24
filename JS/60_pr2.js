/* 8. 배열 회전 */

/* user code */
function answer(user) {
  

  // swap을 통한 방법 (반복 횟수 줄여줌)
  
  let tmp;
  for(let i = 0; i < user.length/2; i++) {
    tmp = user[i];
    user[i] = user[user.length-1-i];
    user[user.length-1-i] = tmp;
  }


  return user;
}

/* main code */
let input = [
  // TC: 1
  [1, 2, 3, 4],
  // TC: 2
  [-1, 6, "hello", -15],
  // TC: 3
  ["apple", "banana", "mango"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
