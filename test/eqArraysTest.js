const assertEqual = require('../assertEqual.js');
const eqArrays = require('../eqArrays');

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));