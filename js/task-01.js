// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const itemRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemRef.length}`);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const findItems = itemRef.forEach(el => {
    console.log(`Category: ${el.children[0].textContent}`);
    console.log(`Elements: ${el.children[1].children.length}`);
});
