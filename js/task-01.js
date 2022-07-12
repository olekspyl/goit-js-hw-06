const categoryEl = document.querySelectorAll('.item');
console.log('Number of categories', categoryEl.length);

const textHeaderEl = document.querySelectorAll('h2');

const quantityEl0 = textHeaderEl[0].querySelectorAll('li')
console.log('Category', textHeaderEl[0].textContent)
console.log('Elements', quantityEl0.length)

const quantityEl1 = textHeaderEl[1].querySelectorAll('li')
console.log('Category', textHeaderEl[1].textContent)
console.log('Elements', quantityEl1.length)

const quantityEl2 = textHeaderEl[2].querySelectorAll('li')
console.log('Category', textHeaderEl[2].textContent)
console.log('Elements', quantityEl2.length)


