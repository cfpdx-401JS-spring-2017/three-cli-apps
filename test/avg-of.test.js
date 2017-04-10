const assert = require('assert');

const avgOf = require('../avg');
describe('avg of ', () => {

    it('calculates the avg of a array of numbers', () => {
        const avg = avgOf([6, 6, 6]);
        console.log('average of the array', avg);
        assert.equal(avg, 6);
    });
});