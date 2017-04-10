const assert = require('assert');
const powerOf = require('../power-of');

describe('power of', () => {

  it('calculates the power of a number', () => {
    const result = powerOf(3, 3);
    assert.equal(result, 27);
  });

  it('returns a value when no numbers are entered', () => {
    const result = power(3, 3);
  });

});