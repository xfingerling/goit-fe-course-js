'use strict';

const checkForSpam = function(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('spam') || lowerStr.includes('sale');
};

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true
