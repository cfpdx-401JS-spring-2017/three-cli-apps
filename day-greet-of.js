'use strict';
const greetOf = require('./day-greet');

const name = process.argv[2];
const time = process.argv[3];
const result = greetOf(name, time);
console.log(result);