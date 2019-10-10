import { eventListener, switcher } from './themeEventListener';
import Theme from '../data/theme';

export default function() {
  if (localStorage.getItem('theme') !== null) {
    const currentTheme = localStorage.getItem('theme');
    document.querySelector('body').classList.add(currentTheme);
    if (currentTheme === Theme.DARK) {
      switcher.checked = true;
    }
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
  eventListener();
}
