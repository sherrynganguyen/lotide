const assert = require('chai').assert;
const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

describe("#eqObjects", () => {
  it("should return true", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it("should return false", () => {
    assert.strictEqual(eqObjects(ab, abc), false); 
  });
  it("should return true", () => {
    assert.strictEqual(eqObjects(cd, dc), true); 
  });
  it("should return false", () => {
    assert.strictEqual(eqObjects(cd, cd2), false); 
  });
});
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// //console.log(assertEqual(eqObjects(ab, ba), true)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// //console.log(assertEqual(eqObjects(ab, abc), false)); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// //console.log(assertEqual(eqObjects(cd, dc), false)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(assertEqual(eqObjects(cd, cd2), false)); // => false