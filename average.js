'use strict';

function avgOf(array) {
  const sum = array.reduce((acc, cur) => {
    acc = parseInt(acc);
    acc += parseInt(cur);

    return acc;
  });

  return sum / array.length;
}

module.exports = avgOf;