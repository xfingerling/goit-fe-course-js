'use strict';

const credits = 23580;
const pricePerDroid = 3000;

const quantityDroids = prompt('Сколько дроидов вы хотите приобрести?', '');

if (quantityDroids === null) {
    alert('Отменено пользователем!');
} else {
    const totalPrice = quantityDroids * pricePerDroid;

    if (totalPrice > credits) {
        alert('Недостаточно средств на счету!');
    } else {
        alert(
            `Вы купили ${quantityDroids} дроидов, на счету осталось ${credits -
                totalPrice} кредитов.`,
        );
    }
}
