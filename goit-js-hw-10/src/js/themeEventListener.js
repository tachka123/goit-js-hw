import Theme from '../data/theme';

export { eventListener, switcher };
function eventListener() {
  switcher.addEventListener('change', changeTheme);
}
const switcher = document.getElementById('theme-switch-control');
const body = document.querySelector('body');
body.classList.add('light-theme');

function changeTheme() {
  if (switcher.checked) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.clear();
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.clear();
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
