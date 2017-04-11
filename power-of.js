'use strict';

const power = require('./power');
const base = parseInt(process.argv[2]);
const exp = parseInt(process.argv[3]);
const result = power(base, exp);
console.log(result);