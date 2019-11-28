'use strict';

let deliveryСountry = prompt('Укажите страну доставки', 'Украина');
let message;
let costOfDelivery;

deliveryСountry = deliveryСountry.toLowerCase();

switch (deliveryСountry) {
    case 'китай':
        costOfDelivery = 100;
        break;

    case 'чили':
        costOfDelivery = 250;
        break;

    case 'австралия':
        costOfDelivery = 170;
        break;

    case 'индия':
        costOfDelivery = 80;
        break;

    case 'ямайка':
        costOfDelivery = 120;
        break;

    default:
        message = 'В вашей стране доставка не доступна';
        alert(message);
}

message = `Доставка в ${deliveryСountry} будет стоить ${costOfDelivery} кредитов`;
alert(message);
