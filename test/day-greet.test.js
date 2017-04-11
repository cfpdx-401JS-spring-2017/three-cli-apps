'use strict';
const assert = require('assert');
const greetingFunction = require('../greet');

describe('days greeting',() => {
    
    it('it should respond with good morning',() => {
        const greetingTest = greetingFunction('martin', '8:58');
        assert.equal(greetingTest, 'good morning martin');
    });
    it('should respond with good afternoon',()=> {
        const greetingTest = greetingFunction('martin', '15:00');
        assert.equal(greetingTest, 'good afternoon martin');
    });
    it('should respond with good evening', () => {
        const greetingTest = greetingFunction('martin', '20:00');
        assert.equal(greetingTest, 'good evening martin');
    });
});
