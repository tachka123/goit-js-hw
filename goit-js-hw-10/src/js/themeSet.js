import { eventListener, switcher } from './themeEventListener';
import Theme from '../data/theme';

export default function() {
  const currentTheme = localStorage.getItem('theme');
  const { body } = document;
  if (currentTheme !== null) {
    body.classList.add(currentTheme);
    if (currentTheme === Theme.DARK) {
      switcher.checked = true;
    }
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    body.classList.add(Theme.LIGHT);
  }
  eventListener();
}
