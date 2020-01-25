'use strict';

function findBestEmployee(employees) {
    let topSalary = 0;
    let topName;

    for (const name in employees) {
        if (topSalary < employees[name]) {
            topSalary = employees[name];
            topName = name;
        }
    }

    return topName;
}

console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux
