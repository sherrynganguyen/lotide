// INSERT assertArraysEqual.js and eqArrays.js
// const assertArraysEqual = require('./assertArraysEqual');
// NEW FUNCTION - LETTERPOSITION
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  delete results[" "];
  return results;
};

module.exports = letterPositions;
// console.log(letterPositions("hello"));
// console.log(letterPositions("lighthouse labs"));
// console.log(assertArraysEqual(letterPositions("hello").e, [1]));