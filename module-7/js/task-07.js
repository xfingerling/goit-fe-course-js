'use strict';

const input = document.getElementById('font-size-control');
console.dir(text);
function changeFontSize() {
    text.style.fontSize = input.value + 'px';
}

input.addEventListener('input', changeFontSize);
