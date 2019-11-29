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

if (total == 0) {
    alert('Отменено пользователем');
} else {
    alert(`Общая сумма чисел равна ${total}`);
}
