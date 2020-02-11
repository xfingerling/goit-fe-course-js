'use strict';

const liItem = document.querySelectorAll('.item');

console.log(`В списке ${liItem.length} категории.`);

Array.from(liItem).forEach(el => {
    console.log(`Категория: ${el.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${el.querySelectorAll('li').length}`);
});
