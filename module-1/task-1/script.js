'use strict';

function generateMessage(name, price) {
  return `Выбран "${name}", цена за штуку ${price} кредитов`;
}
const name = 'Генератор защитного поля';
console.log(generateMessage(name, 1000));
console.log(generateMessage(name, 2000));
