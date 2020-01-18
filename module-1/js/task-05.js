'use strict';

const costDeliveryСhina = 100;
const costDeliveryChile = 250;
const costDeliveryAustralia = 170;
const costDeliveryIndia = 80;
const costDeliveryJamaica = 120;

let deliveryСountry = prompt('Укажите страну доставки', 'Украина');

if (deliveryСountry !== null) {
    deliveryСountry = deliveryСountry.toLowerCase();
}

switch (deliveryСountry) {
    case 'китай':
        alert(
            `Доставка в ${deliveryСountry} будет стоить ${costDeliveryСhina} кредитов`,
        );
        break;

    case 'чили':
        alert(
            `Доставка в ${deliveryСountry} будет стоить ${costDeliveryChile} кредитов`,
        );
        break;

    case 'австралия':
        alert(
            `Доставка в ${deliveryСountry} будет стоить ${costDeliveryAustralia} кредитов`,
        );
        break;

    case 'индия':
        alert(
            `Доставка в ${deliveryСountry} будет стоить ${costDeliveryIndia} кредитов`,
        );
        break;

    case 'ямайка':
        alert(
            `Доставка в ${deliveryСountry} будет стоить ${costDeliveryJamaica} кредитов`,
        );
        break;

    case null:
        alert('Отменено пользователем');
        break;

    default:
        alert('В вашей стране доставка не доступна');
}
