const assert = require('chai').assert;
const letterPositions = require('../letterPositions');
const assertObjectEqual = require('../assertObjectEqual');

describe("#letterPositionsTest", () => {
  it("should return true", () => {
    assert.deepEqual(assertObjectEqual(letterPositions("hello"), {h:[0], e: [1], l: [2, 3], o: [4]}), true);
  });
  it("should return true", () => {
    assert.deepEqual(assertObjectEqual(letterPositions("light l"), {l: [0,6], i: [1], g: [2], h: [3], t: [4]}), true);
  });
});
// console.log(letterPositions("hello"));
// console.log(letterPositions("lighthouse labs"));
// console.log(assertArraysEqual(letterPositions("hello").e, [1]));