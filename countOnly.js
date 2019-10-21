// assertEqual Function

let failemoji = String.fromCharCode(0x1F621);
let passemoji = String.fromCharCode(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `${failemoji} Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `${passemoji} Assertion Passed: ${actual} === ${expected}`;
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {    //loop through all keys in allItems
    if (itemsToCount[item]) {       //Check the key exists in itemsToCount
      if (results[item]) {          //Check if the key already existed in results
        results[item] += 1;
      }
      else {
        results[item] = 1;
      }
    }
  }
  return results;
};



//TEST CODE

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

module.exports = countOnly;
// console.log(assertEqual(result1["Jason"], 1));
// console.log(assertEqual(result1["Karima"], undefined));
// console.log(assertEqual(result1["Fang"], 2));