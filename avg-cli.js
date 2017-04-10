'use strict';

const avgOf = require('./avg');
const inputArray = process.argv.slice(2);
const intArray = inputArray.map( function(i) {
  return parseInt(i);
});

/*eslint no-console: off*/
console.log(avgOf(intArray));