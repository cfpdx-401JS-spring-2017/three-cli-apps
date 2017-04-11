const assert = require('assert');
const dayGreet = require('../day-greet');
describe('dayGreet', () => {
    it('provides approriate morning greeting based on time of day' , () => {
        const greeting = dayGreet('10', 'Ivy');
        assert.equal(greeting,'Good morning, Ivy!');
    });
    it('provides approriate afternoon greeting based on time of day' , () => {
        const greeting = dayGreet('16', 'Ivy');
        assert.equal(greeting,'Good afternoon, Ivy!');
    });
     it('provides approriate evening greeting based on time of day' , () => {
        const greeting = dayGreet('20', 'Ivy');
        assert.equal(greeting,'Good evening, Ivy!');
    });
});

//why does it not always return actual(green) expected (red)?
//what's up with hours 2-9?  Returns good evening?
//assert.equal(actual, expected)
     