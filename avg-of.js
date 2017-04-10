'use strict';

const avgOf = require('./avg');

const arr_string = process.argv.slice(2);
const arr = arr_string.map(Number);
const avg = avgOf(arr);
console.log(avg);