'use strict';

const input = document.querySelector('input#name-input');
const nameSpan = document.querySelector('span#name-output');

input.addEventListener('keyup', () => {
  if (!input.value) nameSpan.textContent = 'незнакомец';
  else nameSpan.textContent = input.value;
});
