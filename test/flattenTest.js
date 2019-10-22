const flatten = require('../flatten');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
describe("#flattenTest", () => {
  it("returns single-level array", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6], true);
  });
  it("returns single-level array", () => {
    assert.deepEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6], true); 
  });
});
// flatten([1, 2, [3, 4], 5, [6]]);
// flatten([1, 2, 3, 4, 5, 6]);