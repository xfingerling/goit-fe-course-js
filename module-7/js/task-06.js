'use strict';

const input = document.getElementById('validation-input');

input.addEventListener('blur', function() {
    let isValid = input.dataset.length == input.value.length ? true : false;

    if (isValid) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else if (!isValid) {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
});
