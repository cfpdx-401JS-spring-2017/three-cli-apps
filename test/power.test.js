const assert = require('assert');
const powerOf = require('../power');

describe('power of', () => {
  it('calculates the power of a number', () => {
    const power = powerOf(3,3);
    assert.equal(power, 27);
  });
});