'use strict';

//require avg.js
//cli lets us run our function from the command line

const avg = require('./avg');

const args = process.argv.slice(2)
    .map((curr) => parseInt(curr));
const result = avg(args);
console.log(result);