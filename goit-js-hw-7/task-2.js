'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

function addToUl(array) {
  const ingredientsDOM = document.getElementById('ingredients');
  const mass = [];
  array.forEach(element => {
    const li = document.createElement('li');
    li.textContent = element;
    mass.push(li)
  });
  ingredientsDOM.append(...mass)
}
addToUl(ingredients);
