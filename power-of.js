'use strict';

const power = require('./power');

const base = process.argv[2];
const exp = process.argv[3];

const result = power(base, exp);
console.log(result);

//varify test by node power-of.js 5 2 (those are the arguments you're passing in)