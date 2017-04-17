'use strict';
const assert = require('assert');
const avgNumber = require('../average');

describe ('average', () => {
    it('calculates the avg of numbers', () => {
        const average = avgNumber([8, 4, 6, 0, 3]);

        assert.equal(average, 4.2);
    });
    
    it('returns 0 if no numbers are provided', () => {
        const average = avgNumber([]);
        assert.equal(average, 0);
    });

});