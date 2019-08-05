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

for (let i = 0; i < numbers.length; i++) {
  total = total + numbers[i];
}

console.log(`Общая сумма чисел - ${total}`);