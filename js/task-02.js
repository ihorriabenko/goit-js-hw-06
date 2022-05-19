const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeListOfItems = product => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = product;

  return item;
}

const elements = ingredients.map(makeListOfItems);

const listRef = document.querySelector('#ingredients');
listRef.append(...elements);
