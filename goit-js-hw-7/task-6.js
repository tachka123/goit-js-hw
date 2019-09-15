'use strict';

const input = document.querySelector('input#validation-input');

input.addEventListener('blur', () => {
  if (input.value.length === Number(input.getAttribute('data-length'))) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
	input.classList.add('invalid');
	input.classList.remove('valid');
  }
});
