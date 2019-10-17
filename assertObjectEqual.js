//INSERT Emoji
let failemoji = String.fromCharCode(0x1F621);
let passemoji = String.fromCharCode(0x1F621);

//INSERT eqArrays.js

const eqArrays = function(array1, array2) {
  let result = true;
  if (array1.length !== array2.length) {
    result = false;
  }
  else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        result = true;
      }
      else {
        result = false;
        break;
      }
    }
  }
  return result;
};

//NEW FUNCTION eqObjects.js
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

/*
- Compare length of objects & keys
- Compare values


*/
const eqObjects = function(object1, object2) {
  let result = true;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return result = false;
  }  else {
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key])) {
        if (eqArrays(object1[key], object2[key])) {
          return result = true;
        }
        else {
          return result = false;
        }
      }
      else {
        if (object1[key] !== object2[key]) {
          return result = false;
        }
      }
    }
  }
  return result;
};

//NEW FUNCTION assertObjectsEqual

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  // Implement me!
  if (eqObjects(object1, object2)) {
    return `${failemoji} Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`;
  }
  else {
    return `${passemoji} Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
  }
};

//TEST CODE

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false
