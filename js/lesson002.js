'use strict';

console.log('lesson002');

if (4 == 9) {
  console.log('Ok');
} else {
  console.log('Error');
}

// const num = 50;

// if (num < 49) {
//   console.log('Error');
// } else if (num > 100) {
//   console.log('Много');
// } else {
//   console.log('OK!');
// }

// num === 50 ? console.log('ok!') : console.log('Error');

const num = 50;

switch (num) {
  case 49:
    console.log('Неверно');
    break;
  case 100:
    console.log('Неверно');
    break;
  case 55:
    console.log('Верно');
    break;
  default:
    console.log('Не в этот раз');
    break;
}
