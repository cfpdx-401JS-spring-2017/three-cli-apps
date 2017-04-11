'use strict';
//1. write a basic function that returns zero and module.exports = the basic function
function powerOf(base, exp){
    //look up js math mdn, go to math.pow
    return Math.pow(base, exp);
}

module.exports = powerOf;