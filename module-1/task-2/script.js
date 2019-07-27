"use strict";

const total = 100;
const ordered = 50;
let userCountOrder = Number(prompt('Сколько единиц товара вам надо?'));
const newTotal = userCountOrder + ordered;
const NOT_SUCCES = 'На складе недостаточно товаров!';
const SUCCES = 'Заказ успешно оформлен! С вами свяжется менеджер!';
if (newTotal <= total) {
  alert(SUCCES);
} else if (newTotal > total) {
  alert(NOT_SUCCES);
} else alert('ERROR');
