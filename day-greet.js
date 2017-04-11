'use strict';

//1. write a basic function that returns zero and module.exports = the basic function

function dayGreet(name, time){

let timeOfDayGreeting ='morning';
   const greeting = 'Good' + timeOfDayGreeting + ', ' + name;
    return greeting;
}
module.exports = dayGreet;