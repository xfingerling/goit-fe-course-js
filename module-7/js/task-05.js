'use strict';

const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

function text() {
    output.innerHTML = input.value;

    if (!input.value) {
        output.innerHTML = 'незнакомец';
    }
}

input.addEventListener('input', text);
