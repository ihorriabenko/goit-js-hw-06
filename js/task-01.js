// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const itemRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemRef.length}`);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const firstElRef = itemRef[0].children[0].textContent;
const firstElLengthRef = itemRef[0].children[1].children.length;
console.log(`Category: ${firstElRef}`);
console.log(`Elements: ${firstElLengthRef}`);

const secondElRef = itemRef[1].children[0].textContent;
const secondElLengthRef = itemRef[1].children[1].children.length;
console.log(`Category: ${secondElRef}`);
console.log(`Elements: ${secondElLengthRef}`);

const thirdElRef = itemRef[2].children[0].textContent;
const thirdElLengthRef = itemRef[2].children[1].children.length;
console.log(`Category: ${thirdElRef}`);
console.log(`Elements: ${thirdElLengthRef}`);
