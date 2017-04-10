'use strict';

function calculateGreeting(name, time) {
  const intTime = parseInt(time.split(':').join(''));
  console.log('Converted time', intTime);
  if (0 <= intTime && intTime <= 1159) {
    time = 'Morning';
  } else if (1200 <= intTime && intTime <= 1659) {
    time = 'Afternoon';
  } else if (1700 <= intTime && intTime <= 2359) {
    time = 'Evening';
  } else {
    time = 'Day'; //edge case if time is not entered
  };
  return `Good ${time}, ${name}.`;
}

module.exports = calculateGreeting;