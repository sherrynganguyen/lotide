
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    if (item === ",") break;
    else {
    result.push(item);   
    }
  }
  return result;
}
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);