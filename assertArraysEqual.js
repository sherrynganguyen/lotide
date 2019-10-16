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
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));

