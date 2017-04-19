'use strict';
//1. write a basic function that returns zero and 'module.exports = basic function that you wrote'

function dayGreet(hour, name) {
  if (hour >= parseInt('00:00') && hour <= parseInt('11:59')){
    return 'Good morning, ' + name + '!';

  } else if (hour >= parseInt('12:00') && hour <= parseInt('16:59')){
    return 'Good afternoon, ' + name + '!';

  } else if (hour >= parseInt('17:00') && hour <= parseInt('23:59')){
    return 'Good evening, ' + name + '!';
  };
  return dayGreet;
};


module.exports = dayGreet;

