//TEST/ASSERTION FUNCTIONS
//erArrays.js

/*const eqArrays = function(array1, array2) {
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
};
*/
//assertArraysEqual.js
let failemoji = String.fromCharCode(0x1F621);
let passemoji = String.fromCharCode(0x1F621);

const assertArraysEqual = function(array1, array2) {
  let result = true;
  if (array1.length !== array2.length) {
    result = false;
  }
  else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        return `${failemoji} Assertion Passed: ${array1} === ${array2}`;
      }
      else {
        return `${passemoji} Assertion Failed: ${array1} !== ${array2}`;
      }
    }
  }
  return result;
};

//ACTUAL FUNCTION

const middle = function(array) {
  let middleStr = [];
  if (array.length <= 2) return middleStr;

  let midIndex = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    middleStr = [array[midIndex - 1], array[midIndex]];
    console.log(middleStr);
    console.log([array[midIndex - 1], array[midIndex]]);
    console.log(assertArraysEqual(middleStr, [array[midIndex - 1], array[midIndex]]));
  }
  else {
    middleStr = [array[midIndex]];
    console.log(middleStr);
    // assertArraysEqual(middleStr, array[midIndex]);
    console.log(assertArraysEqual(middleStr, [array[midIndex]]));
  }
};

middle([1, 2, 3, 4, 5, 6]);
