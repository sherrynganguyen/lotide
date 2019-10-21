const assertEqual = require('./assertEqual');

function tail(array) {
  let array1 = array;
  return array1.slice(1, array.length);
}
// const result = tail(["Hello", "Lighthouse", "Labs"]);

module.exports = tail;