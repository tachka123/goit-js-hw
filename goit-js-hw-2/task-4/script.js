'use strict'

function findLongestWord(string){
  const arr = string.split(' ');
  let longestWord = arr[0];
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > longestWord.length){
      longestWord = arr[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
