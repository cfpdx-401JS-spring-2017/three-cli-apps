'use strict';

function greet(name, time) {
  const timeArray = time.split(':');
  const hour = timeArray[0];
  const minute = timeArray[1];
  let timeOfDay;

  if (hour <= 11 && minute <= 59) {
    timeOfDay = 'morning';
  } else if (hour <= 16 && minute <= 59) {
    timeOfDay = 'afternoon';
  } else {
    timeOfDay = 'evening';
  }
  
  return `good ${timeOfDay} ${name}`;
}

module.exports = greet;