"use strict";

const total = 100;
const ordered = 50;
let a = Number(prompt('Сколько вам надо?'));
const b = a + ordered;
const NOT_SUCCES = 'На складе недостаточно товаров!';
const SUCCES = 'Заказ успешно оформлен! С вами свяжется менеджер!';
if (a < 1) {
  alert('Ведите число от 1');
} else if (b <= total) {
  alert(SUCCES);
} else if (b > total) {
  alert(NOT_SUCCES);
} else alert('ERROR');
