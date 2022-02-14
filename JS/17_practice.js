// 조건문 switch를 이용하여 1~7 사이의 숫자를 입력 받으면 요일을 출력해주는 코드 작성

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