'use strict';

function calculateAvgOf(cliArray) {
  console.log(cliArray);
  var sum = cliArray.reduce( function(acc, curr) {
    acc += curr;
    return acc;
  }, 0);
  console.log('sum', sum);
  console.log('Length of array', cliArray.length);
  let avg = sum / cliArray.length;
  return avg;
}

module.exports = calculateAvgOf;