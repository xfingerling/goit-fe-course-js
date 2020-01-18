'use strict';

let total = 0;
let input;

do {
    input = prompt('Введите число', '');
    const number = Number(input);

    if (Number.isNaN(number)) {
        alert('Было введено не число, попробуйте еще раз', '');
        continue;
    }

    total += number;
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
