const assert = require('assert');
const dayGreet = require('../day-greet');
describe('dayGreet', () => {
    it('provides approriate morning greeting based on time of day' , () => {
        //assert.equal(actual, expected)
        const greeting = dayGreet('11:05', 'Ivy');
        assert.equal(greeting,'Good morning, Ivy!');
    });
    it('provides approriate afternoon greeting based on time of day' , () => {
        //assert.equal(actual, expected)
        const greeting = dayGreet('13', 'Ivy');
        assert.equal(greeting,'Good afternoon, Ivy!');
    });
     it('provides approriate evening greeting based on time of day' , () => {
        //assert.equal(actual, expected)
        const greeting = dayGreet('17:15', 'Ivy');
        assert.equal(greeting,'Good evening, Ivy!');
    });
});