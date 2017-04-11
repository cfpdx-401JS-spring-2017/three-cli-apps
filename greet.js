'use strict';

function greetingFunction(name, time){
    var string = time;
    var result = string.replace(':', '');
    var greetingString = '';
    
    console.log('what is?', result);
    if(result < 1159 && result > 0){
        greetingString += `good morning ${name}`;
    } 
    else if(result < 1659 && result > 1200) {
        greetingString += `good afternoon ${name}`;
    }
    else if(result < 2359 && result > 1700){
        greetingString += `good evening ${name}`;
    }
    return greetingString;

}

module.exports = greetingFunction;
