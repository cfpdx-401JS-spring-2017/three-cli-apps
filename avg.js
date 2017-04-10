'use strict';

//1. write a basic function that returns zero and module.exports = the basic function

function avg(argumentsArray){
    //look up js math mdn, go to math.pow
    return argumentsArray.reduce( (acc, current) => {
        return acc + current;
    },0)/argumentsArray.length;
}

module.exports = avg;