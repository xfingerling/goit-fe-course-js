'use strict';

const listItem = document.querySelectorAll('.item');

console.log(`В списке ${listItem.length} категории.`);

listItem.forEach(el => {
    console.log(`Категория: ${el.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${el.querySelectorAll('li').length}`);
});
