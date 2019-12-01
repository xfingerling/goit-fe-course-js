'use strict';

const findLongestWord = function(string) {
    const sortStrings = string.split(' ').sort((a, b) => b.length - a.length);
    const maxLengthWords = sortStrings.filter(
        el => el.length === sortStrings[0].length,
    );

    for (const word of maxLengthWords) {
        console.log(word);
    }
};
