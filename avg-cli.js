'use strict';
const avgOf = require('./avg-of');

const passedArray = process.argv.splice(2);
const result = avgOf(passedArray);

console.log('average is ', result);

