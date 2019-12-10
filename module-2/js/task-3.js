'use strict';

// const findLongestWord = function(string) {
//     const sortStrings = string.split(' ').sort((a, b) => b.length - a.length);
//     const maxLengthWords = sortStrings.filter(
//         el => el.length === sortStrings[0].length,
//     );

//     for (const word of maxLengthWords) {
//         console.log(word);
//     }
// };

const findLongestWord = function(string) {
    let arrStrings = string.split(' ');
    let longestWord = arrStrings[0];

    for (let i = 1; i < arrStrings.length; i++) {
        if (arrStrings[i].length > longestWord.length) {
            longestWord = arrStrings[i];
        }
    }

    return longestWord;
};
