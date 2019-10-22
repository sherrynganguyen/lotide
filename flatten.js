const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
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
  return newArray;
  //console.log(assertArraysEqual(newArray,array));
};
module.exports = flatten;
// flatten([1, 2, [3, 4], 5, [6]]);
// flatten([1, 2, 3, 4, 5, 6]);