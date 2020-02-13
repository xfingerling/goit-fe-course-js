'use strict';

let counterValue = value.innerHTML;

function increment() {
    value.innerHTML = ++counterValue;
}

function decrement() {
    value.innerHTML = --counterValue;
}

counter.lastElementChild.addEventListener('click', increment);
counter.firstElementChild.addEventListener('click', decrement);
