const greeting = require('./day-greet');

const name = process.argv[2];
const time = process.argv[3];

/*eslint no-console: off*/
console.log(greeting(name, time));