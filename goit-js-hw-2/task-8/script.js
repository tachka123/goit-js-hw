'use strict';

function isLoginValid(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    alert('Ошибка! Логин должен быть от 4 до 16 символов');
    return false;
  }
}

function isLoginUnique(allLogins, login) {
  if (allLogins.includes(login)) {
    alert('Такой логин уже используется!');
    return false;
  } else {
    return true;
  }
}

function addLogin(allLogins, login) {
  if (isLoginUnique(allLogins, login) && isLoginValid(login)) {
    allLogins.push(login);
    alert('Логин успешно добавлен!');
    return true;
  } else {
    return false;
  }
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// // Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
