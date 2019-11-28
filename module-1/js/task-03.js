'use strict';

let message;
let userPass = prompt('Введите пароль', '');
const ADMIN_PASSWORD = 'jqueryismyjam';

if (userPass === null || userPass === '') {
    message = 'Отменено пользователем!';
    alert(message);
} else if (userPass === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
    alert(message);
} else {
    message = 'Доступ запрещен, неверный пароль!';
    alert(message);
}
