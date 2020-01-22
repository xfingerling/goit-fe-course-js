'use strict';

let total = 0;
let input;

do {
    input = prompt('Введите число', '');

    if (input === null) {
        break;
    }

    if (Number.isNaN(+input)) {
        alert('Было введено не число, попробуйте еще раз', '');
        continue;
    }

    total += +input;
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
