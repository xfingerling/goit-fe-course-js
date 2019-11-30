'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
    return login.length >= 4 && login.length <= 16 ? true : false;
};

const isLoginUnique = function(allLogins, login) {
    return allLogins.includes(login) ? false : true;
};

const addLogin = function(allLogins, login) {
    if (isLoginValid(login) === false) {
        alert('Ошибка! Логин должен быть от 4 до 16 символов');
    } else {
        if (isLoginUnique(allLogins, login) === false) {
            alert('Такой логин уже используется!');
        } else {
            allLogins.push(login);
            alert('Логин успешно добавлен!');
        }
    }
};
