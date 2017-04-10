const assert = require('assert');
const powerof = require('../power');

describe('power of', () => {
    it('calculates the power of a number', () => {
        const power = powerof(3, 3);
        assert.equal(power, 27);
    });
});