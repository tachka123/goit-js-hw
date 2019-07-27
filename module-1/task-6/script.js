'use strict';

let input;
let total = 0;
while (input !== null) {
  input = prompt(`ваше число ${total}, сколько прибавим еще?`);
  const inputToNum = Number(input);
  console.log(input);
  if (input === null) {
    alert(`Общая сумма чисел ${total}`);
  } else if (Number.isNaN(inputToNum) == true || inputToNum == '') {
    alert('Вы можете вводить только цифры! Попробуйте еще раз');
  } else if (inputToNum !== null) {
    total += inputToNum;
  }
}
