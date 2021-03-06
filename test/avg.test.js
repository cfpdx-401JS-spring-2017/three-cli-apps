
const assert = require('assert');
const average = require('../avg');
//describe is what we're testing
describe('avg', () => {
    //IT is each individual test case
    it('calculates the average of arguments' , () => {
        //assert.equal(actual, expected)
        const argumentAverage = average([3, 4, 6, 0, 3]);
        assert.equal(argumentAverage, 3.2);
    });

    it('returns NaN for empty array', () => {
        const emptyArray = average([]);
        assert(isNaN(emptyArray));

    });

    it ('returns NaN for no arguments', () => {
        const noArguments = average();
        assert(isNaN(noArguments));

    });
});



//test using mocha