const assert = require('chai').assert;
const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js');
const result = tail(["Hello", "Lighthouse", "Labs"]);
const words = ["Yo yo", "Lighthouse", "Labs"]

describe("#tail", () => {
  it("returns two elements", () => {
    assert.strictEqual(result.length, 2);
  });
  it("ensures first element is \"Lighthouse\"", () => {
    assert.strictEqual(result[0], "Lighthouse");
  });
  it("ensure second element is \"Labs\"", () => {
    assert.strictEqual(result[1], "Labs");
  });
  it("doesn't change the original array", () => {
    assert.strictEqual(words.length, 3);
  });
});

// console.log(assertEqual(result.length, 2)); // ensure we get back two elements
// console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
// console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"
// console.log(assertEqual(result, ["Lighthouse", "Labs"]));
