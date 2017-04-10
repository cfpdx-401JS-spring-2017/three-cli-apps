'use strict';

function calculateGreeting(name, time) {
  const intTime = parseInt(time.split(':').join(''));
  console.log(intTime);
  if (0 < intTime < 1159) {
    time = 'Morning';
  } else if (1200 < time < 1659) {
    time = 'Afternoon';
  } else if (1700 < time < 2359) {
    time = 'Evening';
  } else {
    time = 'Day'; //edge case if time is not entered
  };
  return `Good ${time}, ${name}.`;
}

module.exports = calculateGreeting;