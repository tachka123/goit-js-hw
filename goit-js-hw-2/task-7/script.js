'use strict';

let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('Введите число для добавления в массив');
  if (input !== null) {
    if (Number.isNaN(Number(input))) {
      alert('Было введено не число, попробуйте еще раз');
    } else {
      numbers.push(Number(input));
    }
  }
}
if (numbers.length) {
  for (const number of numbers) {
    total += number;
  }
}

console.log(`Общая сумма чисел - ${total}`);
