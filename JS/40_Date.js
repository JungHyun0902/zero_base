let date_now = new Date();
let date_str = Date();

console.log(date_now);
console.log(date_str);

let date_ms_1 = new Date(0);
console.log(date_ms_1);
let date_ms_2 = new Date(1000*3600*24);
console.log(date_ms_2);

let date_string = new Date('2020-01-01');
console.log(date_string);

// month: 1월(0) ~ 12월(11)
let date_params_1 = new Date(2021, 0, 1);
let date_params_2 = new Date(Date.UTC(2021, 0, 1));

console.log(date_params_1);
console.log(date_params_2);

//
let date = new Date();

console.log(date);

console.log(date.getFullYear());

// 1월(0) ~ 12월(11)
console.log(date.getMonth());

// 일요일(0) ~ 토요일(6)
console.log(date.getDay());

console.log(date.getHours());
console.log(date.getUTCHours());

console.log(date.getTime());
console.log(date.getTimezoneOffset());





//
function dateSub (old_date, new_date) {
  return new_date - old_date;
}

function getTimeSub(old_date, new_date) {
  return new_date.getTime() - old_date.getTime();
}

function benchmark(callback_func) {
  let date_1 = new Date('2020-01-01');
  let date_2 = new Date();

  let start = Date.now();
  for(let i = 0; i < 100000; i++) {
    callback_func(date_1, date_2);
  }
  return Date.now() - start;
}

console.log('dateSub:' + benchmark(dateSub) + 'ms');
console.log('getTimeSub:' + benchmark(getTimeSub) + 'ms');

