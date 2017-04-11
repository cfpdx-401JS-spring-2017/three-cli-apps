const assert = require('assert');
const dayGreet = require('../day-greet');
describe('dayGreet', () => {
    it('provides approriate greeting based on time of day' , () => {
        //assert.equal(actual, expected)
        const greeting = dayGreet('11:05', 'Ivy');
        assert.equal(greeting,'Good morning, Ivy');
    });
});