"use strict";

let input;
let total = 0;
for (i = 0; i != null; i++) {
	input = prompt(`ваше число ${total}, сколько прибавим еще?`);
	total += Number(input);
	if (input == null  ) {
		alert(`Общая сумма чисел ${total}`);
		break;
	}
	else if (isNaN(input) === true){
		alert('Запрещенно вводить строки! Попробуйте еще раз');
		break;
	}
}
