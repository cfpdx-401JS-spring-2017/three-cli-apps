const assert = require('assert');

const greetOf = require('../day-greet');
describe('greeting is ', () => {

    it('gives a greeting based on the morning', () => {
        const greet = greetOf('marty', '8:58');
        assert.equal(greet, 'good morning marty');
    });

    it('gives a greeting based on the afternoon', () => {
        const greet = greetOf('marty', '14:58');
        assert.equal(greet, 'good afternoon marty');
    });

    it('gives a greeting based on the evening', () => {
        const greet = greetOf('marty', '17:01');
        assert.equal(greet, 'good evening marty');
    });
});

