'use strict';

function dayGreeting(name, time) {
  let greeting;
  let splitTime = time.split(':').join('');
  let timeNumber = parseInt(splitTime);

  if(timeNumber <= 1159) {
    greeting = 'morning';
  } else if(timeNumber >= 1200 && timeNumber <=  1659) {
    greeting = 'afternoon';
  } else {
    greeting = 'evening';
  }
  return `good ${greeting} ${name}`;
}

module.exports = dayGreeting;