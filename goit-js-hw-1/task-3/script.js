'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const userInput = prompt('Введите пароль:');
if (userInput === null) {
  message = 'Отменено пользователем!';
} else if (userInput !== ADMIN_PASSWORD) {
  message = 'Доступ  запрещен, неверный пароль!';
} else  {
  message = 'Добро пожаловать! ';
}
alert(message);
