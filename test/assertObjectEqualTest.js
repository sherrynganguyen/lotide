const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
describe("#assertObjectssEqualTest", () => {
  it("returns true for objects that have same keys and values", () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });
  it("returns false for arrays that dont have same length, keys or value", () => {
    assert.strictEqual(eqObjects(cd, cd2), false); 
  });
});


//console.log(assertObjectsEqual(cd, dc)); // => true


//console.log(assertObjectsEqual(cd, cd2)); // => false