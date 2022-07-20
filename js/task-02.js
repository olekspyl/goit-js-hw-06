const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngEl = document.querySelector('#ingredients');
const ingEl = ingredients.map(ingredient => {

   const ingEl = document.createElement('li');
  ingEl.textContent = ingredient;
  ingEl.classList.add('item');
  
  const listIngEl = document.querySelector('#ingredients');
  listIngEl.append(ingEl);
  
  return listIngEl;
 })

console.log(listIngEl)


// Цей меторд не спрацював, бо області видимості не давали працювати разом.
// for (const ingredient of ingredients) {
//   const ingEl = document.createElement('li');
//   ingEl.textContent = ingredient;
//   ingEl.classList.add('item')
// }

// const listIngEl = document.querySelector('#ingredients');
// listIngEl.append();
//   console.log(listIngEl);

