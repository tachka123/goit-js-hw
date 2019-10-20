'use strict';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.querySelector('body');
const start = document.querySelector('button[data-action="start"]');
const cancel = document.querySelector('button[data-action="stop"]');
let timerId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

start.addEventListener('click', startClicked);
cancel.addEventListener('click', cancelClicked);

function startClicked() {
  start.classList.add('disabledContent');
  start.disabled = true;
  timerId = setInterval(() => {
    body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
}

function cancelClicked() {
  clearInterval(timerId);
  start.classList.remove('disabledContent');
  start.disabled = false;
  body.style.backgroundColor = '';
}
