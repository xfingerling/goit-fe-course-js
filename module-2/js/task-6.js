'use strict';

let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введите число', '');
    const number = Number(input);

    if (Number.isNaN(number)) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    } else if (input === '' || input === null) {
        continue;
    }

    numbers.push(number);
    console.log(numbers);
} while (input !== null);

for (const number of numbers) {
    total += number;
}

if (numbers.length === 0) {
    alert('Отменено пользователем');
} else {
    alert(`Общая сумма чисел равна ${total}`);
}
