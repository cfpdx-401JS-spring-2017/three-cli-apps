'use strict';

//cli lets us run our function from the command line

const dayGreet = require('./day-greet');

const time = process.argv[2];
const name = process.argv[3]
  
const result = dayGreet(time, name);

console.log(result);

