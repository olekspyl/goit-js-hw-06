const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngEl = document.querySelector('#ingredients');

  const ingredientsEl = ingredients.map(ingredient => {
  const ingEl = document.createElement('li');

  ingEl.textContent = ingredient;
  ingEl.classList.add('item');

    return ingEl;
  
  })
 
listIngEl.append(...ingredientsEl);


