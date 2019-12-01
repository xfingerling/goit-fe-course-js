'use strict';

const findLongestWord = function(string) {
    const sortStr = string.split(' ').sort((a, b) => b.length - a.length);
    return sortStr.filter(el => el.length === sortStr[0].length);
};
