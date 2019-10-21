const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

const assert = require('chai').assert;
describe("#assertArraysEqualTest", () => {
  it("returns true for arrays that have same strings", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("returns false for arrays that dont have same elements types", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 
  });
});
// test code
// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false