//Insert assertEqual.js
let failemoji = String.fromCharCode(0x1F621);
let passemoji = String.fromCharCode(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `${failemoji} Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `${passemoji} Assertion Passed: ${actual} === ${expected}`;
  }
};

//New Function CountLetter

//Remove space in the string. This excercise ignore the situation when there are numbers and other symbols
//Create a function to loop throught the string
//Create empty object to store letters and counts
//New letter then count =1
//Repeated letter then add 1 to count

const countLetters = function(strTocheck) {
  let result = {};
  strTocheck = strTocheck.split(" ").join("");
  for (const letter of strTocheck) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  // for (const resultkey in result) {
  //   if (!Character.isLetter(resultkey)) {
  //     delete result.resultkey;
  //   }
  // }
  return result;
};

console.log(countLetters("lighthouse in the house"));
console.log(assertEqual(countLetters("lighthouse in the house"), "lighthouse in the house"));