const assert = require('assert');
const avgOf = require('../avg.js');

describe('test average', () => {
  it('returns the average of an array of numbers', () => {
    //
    const result = avgOf([3, 4, 6, 0, 3]);
    assert.equal(result, 3.2);
  });
});