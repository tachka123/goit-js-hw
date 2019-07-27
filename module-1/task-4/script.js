'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let stringDroid = prompt('Сколько дроидов желаете, милорд?');
let numDroid = Number.parseInt(stringDroid);
if (stringDroid == null) {
  alert('Отменено пользователем!');
} else if (Number.isNaN(numDroid)) {
  alert('Введите число!');
} else {
  const totalPrice = pricePerDroid * numDroid;
  if (credits < totalPrice) {
    alert('Недостаточно средств на счету!');
  } else if (credits >= totalPrice) {
    alert(
      `вы купили ${numDroid} дроидов, на счету осталось ${credits -
        totalPrice} кредитов.`,
    );
  }
}
