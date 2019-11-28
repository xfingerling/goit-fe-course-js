'use strict';

let deliveryСountry = prompt('Укажите страну доставки', 'Украина');
let message;
let costOfDelivery;

deliveryСountry = deliveryСountry.toLowerCase();

switch (deliveryСountry) {
    case 'китай':
        costOfDelivery = 100;
        message = `Доставка в ${deliveryСountry} будет стоить ${costOfDelivery} кредитов`;
        alert(message);
        break;

    case 'чили':
        costOfDelivery = 250;
        message = `Доставка в ${deliveryСountry} будет стоить ${costOfDelivery} кредитов`;
        alert(message);
        break;

    case 'австралия':
        costOfDelivery = 170;
        message = `Доставка в ${deliveryСountry} будет стоить ${costOfDelivery} кредитов`;
        alert(message);
        break;

    case 'индия':
        costOfDelivery = 80;
        message = `Доставка в ${deliveryСountry} будет стоить ${costOfDelivery} кредитов`;
        alert(message);
        break;

    case 'ямайка':
        costOfDelivery = 120;
        message = `Доставка в ${deliveryСountry} будет стоить ${costOfDelivery} кредитов`;
        alert(message);
        break;

    default:
        message = 'В вашей стране доставка не доступна';
        alert(message);
}
