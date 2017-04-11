'use strict';

function calculateGreeting(name, time = 'Day') {
  const intTime = parseInt(time.split(':').join(''));
  if (0 <= intTime && intTime <= 1159) {
    time = 'Morning';
  } else if (1200 <= intTime && intTime <= 1659) {
    time = 'Afternoon';
  } else if (1700 <= intTime && intTime <= 2359) {
    time = 'Evening';
  }
  return `Good ${time}, ${name}.`;
}

module.exports = calculateGreeting;