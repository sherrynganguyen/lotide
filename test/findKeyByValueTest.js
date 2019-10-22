const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');
const assertEqual = require('../assertEqual');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeybyValueTest", () => {
  it("should return true", () => {
    assert.strictEqual((assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")), true);
  });
  it("should return false", () => {
    assert.strictEqual((assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama")), false); 
  });
  it("should return true", () => {
    assert.strictEqual((assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)), true); 
  });
});

// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama"));
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));