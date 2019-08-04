'use strict';

function formatString(string) {
  const limitOfString = 40;
  const arr = string.split('');
  if (arr.length > limitOfString) {
    arr.splice(limitOfString);
    string = arr.join('');
    return string + '...';
  } else {
    return string;
  }
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
