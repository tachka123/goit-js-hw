'use strict';

function findBestEmployee(employees) {
  const employersNames = Object.keys(employees);
  let bestEmloyer = employersNames[0] ;
  let bestEmloyerProd = 0;
  for (const key of Object.keys(employees)) {
    if (bestEmloyerProd < employees[key]) {
      bestEmloyerProd = employees[key];
      bestEmloyer = key;
    }
  }
  return bestEmloyer;
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
