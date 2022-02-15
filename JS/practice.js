//ch17. 조건문 switch를 이용하여 1~7 사이의 숫자를 입력 받으면 요일을 출력해주는 코드 작성
/*
const day = 3;
let week;

switch(day) {
  case 1:
    week = "월요일";
    break;
  case 2:
    week = "화요일";
    break;
  case 3:
    week = "수요일";
    break;
  case 4:
    week = "목요일";
    break;
  case 5:
    week = "금요일";
    break;
  case 6:
    week = "토요일";
    break;
  case 7:
    week = "일요일";
    break;
  default:
    week = "공휴일";
    break;
}

console.log(week);
*/

// ch.25 두 정수를 입력 받아 가장 큰 수를 출력해주는 함수 작성
/* case1
function MAX (x, y) {
  if (x > y) {
    return x;
  } else if (x < y) {
    return y;
  } else {
    return 'same number';
  }
}
*/

/* case2
function MAX (x, y) {
  return x > y ? x : y;
}
*/

console.log(MAX(3, 5));
console.log(MAX(10,3));
console.log(MAX(7, 8));

