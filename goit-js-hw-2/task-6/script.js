`use strict`;

function checkForSpam(str) {
  const lowerCaseStr = str.toLowerCase();
  const arr = lowerCaseStr.split('  ');
  console.log(arr);
  if (arr[0].includes('spam') || arr[0].includes('sale')) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
