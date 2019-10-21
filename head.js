const assertEqual = require('./assertEqual');
function head(array) {
  return array[0];
}


console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([]), 5));