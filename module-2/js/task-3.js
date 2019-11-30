'use strict';

const findLongestWord = function(string) {
    return string.split(' ').sort((a, b) => b.length - a.length)[0];
};
