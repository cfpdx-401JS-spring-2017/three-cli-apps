const assert = require('assert');
const greeting = require('../day-greet');

describe('day greeting', () => {
  it('returns greeting with name and time of day', () => {
    //
    const result = greeting('Keeley', '22:59');
    assert.equal(result, 'Good Evening, Keeley.');
  });
});