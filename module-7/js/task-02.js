'use strict';

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const createListItem = function(arr) {
    return arr.map(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        return li;
    });
};

const ingredientList = document.getElementById('ingredients');

ingredientList.append(...createListItem(ingredients));
