'use strict';

const getAllPropValues = function(arr, prop) {
    const values = [];

    for (const obj of arr) {
        values.push(obj[prop]);
    }

    return values;
};
