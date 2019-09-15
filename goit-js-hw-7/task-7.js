'use strict';

const rangeInput = document.querySelector('input#font-size-slider');
const span = document.querySelector('span#text');

rangeInput.addEventListener('click', () => {
  span.style.fontSize = `${16 + rangeInput.value * 0.7}px`;
});
