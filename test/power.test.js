const assert = require('assert');
const powerOf = require('../power');

describe('power of', () => {

  it('calculates the power of a number', () => {
    const result = powerOf(3, 3);
    assert.equal(result, 27);
  });

  it('returns a value when no numbers are entered', () => {
    const stringResult = powerOf(3, 3);
    assert.equal(stringResult, 'Please enter two numbers');
  });

});