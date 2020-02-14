'use strict';

const change = controls.children[1];
const remove = controls.children[2];

const randomRBG = function() {
    const rand1 = Math.floor(Math.random() * (255 + 1));
    const rand2 = Math.floor(Math.random() * (255 + 1));
    const rand3 = Math.floor(Math.random() * (255 + 1));
    return `rgb(${rand1}, ${rand2}, ${rand3})`;
};

const createBoxes = function(amount) {
    const container = document.createElement('div');
    let squareWidth = 30;

    if (boxes.children.length) {
        boxes.innerHTML = '';
    }

    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        div.style.cssText = `width:${squareWidth}px; height:${squareWidth}px; background-color: ${randomRBG()};`;
        boxes.append(div);
        container.append(div);

        squareWidth += 10;
    }

    return container;
};

const addBoxes = function() {
    boxes.append(createBoxes(controls.children[0].value));
};

const removeBoxes = function() {
    boxes.innerHTML = '';
};

change.addEventListener('click', addBoxes);
remove.addEventListener('click', removeBoxes);
