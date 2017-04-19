'use strict';

//1. write a basic function that returns zero and "module.exports = the basic function that you wrote""

function avg(argumentsArray = []){
    return argumentsArray.reduce((acc, current) => {
        return acc + current;
    },0)/argumentsArray.length;
}

module.exports = avg;