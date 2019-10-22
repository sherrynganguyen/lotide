const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;