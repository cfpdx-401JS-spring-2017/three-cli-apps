const assert = require('assert');
const greet = require('../greeting.js');

describe('returns a greeting based on the time provided', () => {

  it('should return "good morning yuval" if second argument is between 00:00 - 11:59', () => {
    const output = greet('yuval', '11:45');
    assert.equal(output, 'good morning yuval');
  });

  it('should return "good afternoon yuval" if the second argument is between 12:00 - 16:59', () => {
    const output = greet('yuval', '12:45');
    assert.equal(output, 'good afternoon yuval');
  });

  it('should return "good evening yuval" if the second argument is between 17:00 - 23:59', () => {
    const output = greet('yuval', '22:40');
    assert.equal(output, 'good evening yuval');
  });

});