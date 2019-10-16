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

let failemoji = String.fromCharCode(0x1F621);
let passemoji = String.fromCharCode(0x1F621);

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return `${failemoji} Assertion Passed: ${array1} === ${array2}`;
  }
  else {
    return `${passemoji} Assertion Failed: ${array1} !== ${array2}`;
  }
};
// Without function
const without = function(source, itemsToRemove) {
  let newArray = [];

  for (let i = 0; i < source.length; i++) {
    let remove = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        remove = true;
      }
    }
    if (remove === false) {
      newArray.push(source[i]);
    }
  }
  console.log(newArray);
  console.log(assertArraysEqual(source,newArray));
};
without([1, 2, 3, 4], [1]);
without(["1", "2", "3"], [1, 2, "3"]);