'use strict';

let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введите число', '');

    if (input === '' || input === null) {
        continue;
    } else if (Number.isNaN(+input)) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }

    numbers.push(+input);
} while (input !== null);

for (const number of numbers) {
    total += number;
}

if (numbers.length === 0) {
    alert('Отменено пользователем');
} else {
    alert(`Общая сумма чисел равна ${total}`);
}
