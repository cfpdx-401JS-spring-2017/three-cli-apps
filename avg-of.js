'use strict';

const avgOf = function(arr) {
  let length = arr.length;
  let sum = arr.reduce(function(acc, curr) {
    let parsedAcc = parseInt(acc);
    let parsedCurr = parseInt(curr);
    return parsedAcc += parsedCurr;
  });
  let avg = sum / length; 
  return avg;
};

module.exports = avgOf;