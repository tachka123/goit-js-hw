'use strict';

const renderBtn = document.querySelector('button[data-action=render]');
const destroyBtn = document.querySelector('button[data-action=destroy]');
const input = document.querySelector('input[type=number]');
const boxes = document.querySelector('#boxes');

renderBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = input.value;
  for (let i = 0; i < amount; i++) {
	const heightAndWidthFormula = `${30 + i * 10}px`;
    const square = document.createElement('div');
    square.style.height = heightAndWidthFormula ;
    square.style.width = heightAndWidthFormula;
    square.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    boxes.prepend(square);
  }
}

function destroyBoxes() {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}

function getRandomColor() {
	return Math.random() * 255;
  }
