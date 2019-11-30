'use strict';

const calculateEngravingPrice = function(message, pricePerWord) {
    return message.split(' ').length * pricePerWord;
};
