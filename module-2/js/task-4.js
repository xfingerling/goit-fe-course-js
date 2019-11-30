'use strict';

const formatString = function(string) {
    return string.length > 40 ? string.slice(0, 40) + '…' : string;
};
