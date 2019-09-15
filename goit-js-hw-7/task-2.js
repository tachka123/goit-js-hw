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
  array.forEach(element => {
    const li = document.createElement('li');
    li.textContent = element;
    ingredientsDOM.append(li);
  });
}
addToUl(ingredients);
