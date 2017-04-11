const assert = require('assert');
const average = require('../average');

describe('Avg of', () => {
  it('calculates and returns the average of a given set of numbers', () => {
    var avg = average([1,2,3]);
    assert.equal(avg, 2);
  });
});