let failemoji = String.fromCharCode(0x1F621);
let passemoji = String.fromCharCode(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `${failemoji} Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `${passemoji} Assertion Passed: ${actual} === ${expected}`;
  }
};

const eqArrays = function(array1, array2) {
  let result = true;
  if (array1.length !== array2.length) {
    result = false;
  }
  else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        result = true;
      }
      else {
        result = false;
        break;
      }
    }
  }
  console.log(result);
}


// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);