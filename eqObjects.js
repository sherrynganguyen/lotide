//INSERT assertEqual.js
let failemoji = String.fromCharCode(0x1F621);
let passemoji = String.fromCharCode(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `${failemoji} Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `${passemoji} Assertion Passed: ${actual} === ${expected}`;
  }
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc), false)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false)); // => false