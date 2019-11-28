'use strict';

let credits = 23580;
let pricePerDroid = 3000;
let countDroids = prompt('Сколько дроидов вы хотите приобрести?', '');
let message;

if (countDroids === null || countDroids === '') {
    message = 'Отменено пользователем!';
    alert(message);
} else {
    countDroids = Number(countDroids);
    let totalPrice = countDroids * pricePerDroid;

    if (totalPrice > credits) {
        message = 'Недостаточно средств на счету!';
        alert(message);
    } else {
        let accountBalance = credits - totalPrice;
        message = `Вы купили ${countDroids} дроидов, на счету осталось ${accountBalance} кредитов.`;
        alert(message);
    }
}
