const assertEqual = require('./assertEqual');

function tail(array) {
  let array1 = array;
  return array1.slice(1, array.length);
}

module.exports = tail;