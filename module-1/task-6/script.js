let input;
let total = 0;
let i;
for (i = 0; i != null; i++) {
  input = prompt(`ваше число ${total}, сколько прибавим еще?`);

  if (input === null) {
    alert(`Общая сумма чисел ${total}`);
    break;
  } else if (isNaN(input) === true || input == "") {
    alert('Вы можете вводить только цифры! Попробуйте еще раз');
  } else if (input != null && isNaN(input) === false) {
    total += Number.parseInt(input);
  }
}
