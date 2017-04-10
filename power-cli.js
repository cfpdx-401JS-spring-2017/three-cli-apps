'use strict';
const powerOf = require('./power');

const base = parseInt(process.argv[2]);
const exponent = parseInt(process.argv[3]);

console.log(powerOf(base, exponent));