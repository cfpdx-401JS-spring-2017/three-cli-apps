
const assert = require('assert');
//../takes you up a level....requiring the avg.js file
const average = require('../avg');
//describe is what we're testing
describe('avg', () => {
    //IT is each individual test case
    it('calculates the average of arguments' , () => {
        //assert.equal(actual, expected)
        const argumentAverage = average([3, 4, 6, 0, 3]);
        assert.equal(argumentAverage, 3.2);
    });
});

//test using mocha