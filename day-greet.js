'use strict';

function greetOf(name, time) {
    let greeting;

    let times = time.split(':').join('');
    let actualTime = parseInt(times);

    if (actualTime <= 1159) {
        greeting = 'morning';
    }else if (actualTime > 1159 && actualTime <= 1659 ){
        greeting = 'afternoon';
    } else {
        greeting = 'evening';
    }

    return `good ${greeting} ${name}`;
}

module.exports = greetOf;