'use strict';

let message;

const ADMIN_PASSWORD = 'jqueryismyjam';

const userPass = prompt('Введите пароль', '');

if (userPass === null) {
    message = 'Отменено пользователем!';
    alert(message);
} else if (userPass === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
    alert(message);
} else {
    message = 'Доступ запрещен, неверный пароль!';
    alert(message);
}
