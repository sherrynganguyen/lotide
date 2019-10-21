let failemoji = String.fromCharCode(0x1F621);
let passemoji = String.fromCharCode(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`${failemoji} Assertion Failed: ${actual} !== ${expected}`);
    return false;
  } else {
    console.log(`${passemoji} Assertion Passed: ${actual} === ${expected}`)
    return true;
  }
};

module.exports = assertEqual;