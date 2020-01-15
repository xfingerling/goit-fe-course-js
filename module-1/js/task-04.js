'use strict';

let credits = 23580;
let pricePerDroid = 3000;

const messageCancel = 'Отменено пользователем!';
const messageWrong = 'Недостаточно средств на счету!';

let quantityDroids = prompt('Сколько дроидов вы хотите приобрести?', '');

if (quantityDroids === null || quantityDroids === '') {
    alert(messageCancel);
} else {
    quantityDroids = Number(quantityDroids);
    const totalPrice = quantityDroids * pricePerDroid;

    if (totalPrice > credits) {
        alert(messageWrong);
    } else {
        let accountBalance = credits - totalPrice;
        const messageSuccess = `Вы купили ${quantityDroids} дроидов, на счету осталось ${accountBalance} кредитов.`;
        alert(messageSuccess);
    }
}
