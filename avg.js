'use strict';

const averageOf = require('./average');
const input = process.argv.slice(2);
const average = averageOf(input);
console.log(average);