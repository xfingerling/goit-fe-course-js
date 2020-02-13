'use strict';

const input = document.getElementById('font-size-control');

function changeFontSize() {
    text.style.fontSize = input.value + 'px';
}

input.addEventListener('input', changeFontSize);
