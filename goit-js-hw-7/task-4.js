'use strict';

let counterValue = document.getElementById('value');
document
  .querySelector('button[data-action="increment"]')
  .addEventListener('click', increment);
document
  .querySelector('button[data-action="decrement"]')
  .addEventListener('click', decrement);

function increment() {
  counterValue.textContent++;
}

function decrement() {
  counterValue.textContent--;
}
