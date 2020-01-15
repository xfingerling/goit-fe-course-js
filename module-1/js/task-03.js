'use strict';

const messageCancel = 'Отменено пользователем!';
const messageWellcome = 'Добро пожаловать!';
const messageWrong = 'Доступ запрещен, неверный пароль!';

const ADMIN_PASSWORD = 'jqueryismyjam';

const userPass = prompt('Введите пароль', '');

if (userPass === null || userPass === '') {
    alert(messageCancel);
} else if (userPass === ADMIN_PASSWORD) {
    alert(messageWellcome);
} else {
    alert(messageWrong);
}
