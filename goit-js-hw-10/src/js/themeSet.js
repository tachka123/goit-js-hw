import { eventListener, switcher } from './themeEventListener';
import Theme from '../data/theme';

export default function() {
  try {
    const currentTheme = localStorage.getItem('theme');
    document.querySelector('body').classList.add(currentTheme);
    if (currentTheme === Theme.DARK) {
      switcher.checked = true;
    }
  } catch {
    localStorage.setItem('theme', theme.light);
  }
  eventListener();
}
