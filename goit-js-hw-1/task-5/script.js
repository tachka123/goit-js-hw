'use strict';

let message = prompt('В какую страну доставить?: ');
if (message === null) {
  alert('Отменено пользователем!');
} else {
  switch (message.toLowerCase()) {
    case 'китай':
      alert('Китай - 100 кредитов');
      break;
    case 'чили':
      alert('Чили - 250 кредитов');
      break;
    case 'австралия':
      alert('Австралия - 170 кредитов');
      break;
    case 'индия':
      alert('Индия - 80 кредитов');
      break;
    case 'ямайка':
      alert('Ямайка - 120 кредитов');
      break;
    default:
      alert('Вашей страны нет в списке');
  }
}
