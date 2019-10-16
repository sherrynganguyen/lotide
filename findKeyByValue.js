//INSERT assertEqual.js
let failemoji = String.fromCharCode(0x1F621);
let passemoji = String.fromCharCode(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `${failemoji} Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `${passemoji} Assertion Passed: ${actual} === ${expected}`;
  }
};

//NEW FUNCTION

//SCAN OBJECT AND RETURN THE FIRST KEY CONTAIN GIVEN VALUE.
//IF NO KEY, RETURN UNDEFINED.

const findKeyByValue = function(object, searchValue) {
  for (let key of Object.keys(object)) {  //Loop through each key of the object
    if (searchValue === object[key]) {    //return key if searchValue matches with the key's value
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));