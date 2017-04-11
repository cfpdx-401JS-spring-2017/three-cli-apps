'use strict';
//1. write a basic function that returns zero and 'module.exports = basic function that you wrote'

function dayGreet(hour, name) {
  if (hour >= '0:00' && hour <= '11:59'){
    return 'Good morning, ' + name + '!';

  } else if (hour >= '12:00' && hour <= '16:59'){
    return 'Good afternoon, ' + name + '!';

  } else if (hour >= '17:00' && hour <= '23:59'){
    return 'Good evening, ' + name + '!';
  };
  return dayGreet;
};


module.exports = dayGreet;

