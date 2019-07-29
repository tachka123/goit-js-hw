'use strict';

let total = 0;
while (true) {
  const input = Number.parseInt(prompt(`ваше число ${total}`));
  if (!input && input !== 0) {
    alert(`Общая сумма чисел ${total}`);
    break;
  } else {
    total += input;
  } 
}
