import foodTemplate from '../template/foodItems.hbs';
import foodItems from '../data/menu.json';

const menu = document.querySelector('.menu');

export default function() {
  const template = foodItems.reduce((acc, el) => {
    return acc + foodTemplate(el);
  }, '');
  menu.innerHTML = template;
}
