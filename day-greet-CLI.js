'use strict';
const dayGreeting = require('./day-greet');

const passedName = process.argv[2];
const passedTime = process.argv[3];
const result = dayGreeting(passedName, passedTime);

console.log(result);

