//TEST/ASSERTION FUNCTIONS
//erArrays.js

const eqArrays = require('./eqArrays');
const assertArraysEqual = require ('./assertArraysEqual');

//ACTUAL FUNCTION

const middle = function(array) {
  let middleStr = [];
  if (array.length <= 2) return middleStr;

  let midIndex = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    middleStr = [array[midIndex - 1], array[midIndex]];
  }
  else {
    middleStr = [array[midIndex]];
  }
  return middleStr;
};

module.exports = middle;
