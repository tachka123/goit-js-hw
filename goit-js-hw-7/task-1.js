'use strict';
const categories = document.getElementById('categories');
const childrenOfCategorie = categories.children;

console.log(`в списке ${childrenOfCategorie.length} категории`);

for (const item of childrenOfCategorie) {
  console.log('Категория: ' + item.querySelector('h2').textContent);
  console.log('Количество элементов: ' + item.querySelectorAll('ul>li').length);
}
