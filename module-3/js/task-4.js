'use strict';

const countTotalSalary = function(employees) {
    return Object.values(employees).reduce((a, b) => a + b, 0);
};
