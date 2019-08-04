'use strict';

const credits = 23580;
const pricePerDroid = 3000;
const droidsCount = (prompt('Сколько дроидов желаете?'));
if (droidsCount === null) {
  alert('Отменено пользователем!');
}else {
  const totalPrice = pricePerDroid * Number(droidsCount);
  if (credits < totalPrice) {
    alert('Недостаточно средств на счету!');
  } else {
    alert(`вы купили ${droidsCount} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
  }
}