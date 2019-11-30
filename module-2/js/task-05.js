'use strict';

const checkForSpam = function(str) {
    const lowerStr = str.toLowerCase();

    return lowerStr.includes('spam') || lowerStr.includes('sale');
};
