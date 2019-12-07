'use strict';

const findBestEmployee = function(employees) {
    let maxTasks = 0;
    let stafName;

    for (let name in employees) {
        if (employees[name] > maxTasks) {
            maxTasks = employees[name];
            stafName = name;
        }
    }
    return stafName;
};
