const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return `${failemoji} Assertion Passed: ${array1} === ${array2}`;
  }
  else {
    return `${passemoji} Assertion Failed: ${array1} !== ${array2}`;
  }
};


module.export = assertArraysEqual;