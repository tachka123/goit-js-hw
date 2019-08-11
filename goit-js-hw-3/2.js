'use strict';

function countProps(obj) {
  let counter = 0;
  for (let key in obj) {
    counter = counter + 1;
  }
  return counter
}

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
