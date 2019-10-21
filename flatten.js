let failemoji = String.fromCharCode(0x1F621);
let passemoji = String.fromCharCode(0x1F621);

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
  return result;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return `${failemoji} Assertion Passed: ${array1} === ${array2}`;
  }
  else {
    return `${passemoji} Assertion Failed: ${array1} !== ${array2}`;
  }
};

//NEW FUNCTION - FLATTEN

const flatten = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    }
    else {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
  console.log(assertArraysEqual(newArray,array));
};
module.exports = flatten;
// flatten([1, 2, [3, 4], 5, [6]]);
// flatten([1, 2, 3, 4, 5, 6]);