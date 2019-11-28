'use strict';

let total = 0;

while (true) {
    let input = +prompt('Введите число', '');

    if (input === 0) {
        break;
    } else if (isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }

    total += input;
}

let message = `Общая сумма чисел равна ${total}`;

alert(message);
