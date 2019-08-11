'use strict'
function countTotalSalary(obj){
let value = 0;
	for (let key of Object.keys(obj)){
value += obj[key];
	}
	return value
}

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400