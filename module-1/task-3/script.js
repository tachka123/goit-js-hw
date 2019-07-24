"use strict";

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const a = prompt('Введите пароль:');
if (a === null) {
  message = 'Отменено пользователем!';
  alert(message);
} else if (a != ADMIN_PASSWORD) {
  massage = 'Доступ  запрещен, неверный пароль!';
  alert(massage);
} else if (a == ADMIN_PASSWORD) {
  message = 'Добро пожаловать!   ';
  alert(message);
} else console.log('done');
