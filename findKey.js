//Insert assertEqual.js function
let failemoji = String.fromCharCode(0x1F621);
let passemoji = String.fromCharCode(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `${failemoji} Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `${passemoji} Assertion Passed: ${actual} === ${expected}`;
  }
};

//NEW FUNCTION

const findKey = function(keyList, callback) {
  for (let key in keyList) {
    if (callback(keyList[key])) {
      return key;
    }
  }
};

const result1 = findKey({"Blue Hill": { stars: 1 },
                      "Akaleri":   { stars: 3 },
                      "noma":      { stars: 2 },
                      "elBulli":   { stars: 3 },
                      "Ora":       { stars: 2 },
                      "Akelarre":  { stars: 3 }}
                      , x => x.stars === 2);
// console.log(result1);

// console.log(assertEqual(result1,"noma"));
module.exports = findKey;