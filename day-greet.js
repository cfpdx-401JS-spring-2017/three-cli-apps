'use strict';

const greet = require('./greeting');
const name = process.argv[2];
const time = process.argv[3];
const expression = greet(name, time);

console.log(expression);