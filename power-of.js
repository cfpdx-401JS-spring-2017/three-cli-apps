'use strict';
const powerOf = require('./power');

const base = process.argv[2];
const exp = process.argv[3];
const result = powerOf(base, exp);
console.log(result);