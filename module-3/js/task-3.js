'use strict';

// function topSalary(salaries) {
//     let maxSalary = 0;
//     let stafName = null;

//     for (const [name, salary] of Object.entries(salaries)) {
//         if (maxSalary < salary) {
//             maxSalary = salary;
//             stafName = name;
//         }
//     }

//     return stafName;
// }

function findBestEmployee(salaries) {
    let maxSalary = 0;
    let stafName;

    for (const name in salaries) {
        if (maxSalary < salaries[name]) {
            maxSalary = salaries[name];
            stafName = name;
        }
    }

    return stafName;
}
