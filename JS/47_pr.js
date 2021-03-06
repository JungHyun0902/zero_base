/*** 5. 무한 뺄셈 ***/

/* user code */
function answer(s, e) {
  let sequence = [];
  sequence.push(s);
  sequence.push(e);

  // 코드 구현 시작 영역

  for(let i = 0; i < sequence.length; i++) {
    if(sequence[i] >= sequence[i+1]) {
      let res = sequence[i] - sequence[i+1];
      sequence.push(res);
    } else {
      break;
    }
  }

  // 코드 구현 종료 영역

  return sequence;
}

/* main code */
let input = [
  // TC: 1
  [9, 3],
  // TC: 2
  [6, 3],
  // TC: 3
  [13, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
