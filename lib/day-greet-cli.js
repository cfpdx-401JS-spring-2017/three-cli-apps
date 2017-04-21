const dayGreet = require('./day-greet.js');

const time = process.argv[2];
const name = process.argv[3];

let result = dayGreet(time, name);

console.log(result);

