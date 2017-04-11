'use strict';

const assert = require('assert');
const dayGreeting = require('../day-greet.js');

describe('day greeting test', () => {

  it('checking that function returns greeting with name and part of day based string', () => {
    const greeting = dayGreeting('nicky', '12:05');
    assert.equal(greeting, 'good afternoon nicky');
  });

  it('checking that greeting returns morning correctly', () => {
    const morningGreeting = dayGreeting('nicky', '6:05');
    assert.equal(morningGreeting, 'good morning nicky');
  });

  it('checking that greeting returns morning correctly', () => {
    const eveningGreeting = dayGreeting('nicky', '18:05');
    assert.equal(eveningGreeting, 'good evening nicky');
  });
});