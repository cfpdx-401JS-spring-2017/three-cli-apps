'use strict';
function avgNumber(numbers){
    let sum = 0;
    for(var i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    if (sum === 0){
        return 0;

    }
    return sum / numbers.length;
}
module.exports = avgNumber;