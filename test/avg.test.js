'use strict';
const assert = require('assert');
const avgOf = require('../avg-of');

describe('avg test', () => {

  it('checks that result of function is average of items in array', () => {
    let array = [2, 1, 3, 5];
    const avg = avgOf(array);
    assert.equal(avg, 2.75);
  });
});
