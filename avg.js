'use strict';

function avgOf(arr) {
    var sum = arr.reduce((acc, curr) => {
        acc += curr;
        return acc;
    });
    return sum / arr.length;

}

module.exports = avgOf;