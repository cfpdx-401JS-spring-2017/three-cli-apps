//describe is what we're testing
const assert = require('assert');
//../takes you up a level....requiring the power-of.js file
const powerOf = require('../power');

describe('power of', () => {
    //it is each individual test case
    it('calculates the power of a number' , () => {
        //assert.equal(actual, expected)
        const power = powerOf(3, 3);
        assert.equal(power, 27);
    });
});

//test using mocha