//INSERT Emoji
let failemoji = String.fromCharCode(0x1F621);
let passemoji = String.fromCharCode(0x1F621);

//INSERT eqArrays.js

const eqArrays = require('./eqArrays');

const eqObjects = require('./eqObjects');

//NEW FUNCTION assertObjectsEqual

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  // Implement me!
  if (eqObjects(object1, object2)) {
    console.log(`${failemoji} Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
    return true;
  }
  else {
    console.log(`${passemoji} Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
    return false;
  }
};

//TEST CODE
module.exports = assertObjectsEqual;
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// //console.log(assertObjectsEqual(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// //console.log(assertObjectsEqual(cd, cd2)); // => false
