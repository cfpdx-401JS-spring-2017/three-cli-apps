'use strict';

function calculateAvgOf(cliArray) {
  var sum = cliArray.reduce( function(acc, curr) {
    acc += curr;
    return acc;
  }, 0);
  let avg = sum / cliArray.length;
  return avg;
}

module.exports = calculateAvgOf;