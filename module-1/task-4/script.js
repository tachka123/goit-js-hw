"use strict";

const credits = 23580;
const pricePerDroid = 3000;
let stringDroid = prompt('Сколько дроидов желаете, милорд?');
let numDroid = parseInt(stringDroid);
if (stringDroid == null) {
  alert('Отменено пользователем!');
} else if (Number.isNaN(numDroid)) {
  alert('Введите число!');
} else if (numDroid < 1) {
  alert('Введите число от 1');
} else {
  alert('Идет обработка!');
  const totalPrice = pricePerDroid * numDroid;
  const left = credits - totalPrice;
  if (credits < totalPrice) {
    alert('Недостаточно средств на счету!');
  } else if (credits >= totalPrice) {
    alert(`вы купили ${numDroid} дроидов, на счету осталось ${left} кредитов.`);
  }
}
