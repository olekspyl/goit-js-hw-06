const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories', categoriesEl.length);

const listEl = categoriesEl.forEach(categoryEl => {

    const firstCategoriesChildren = categoryEl.firstElementChild.textContent;
    console.log('Category:', firstCategoriesChildren);

    const numbersElInCategory = categoryEl.lastElementChild.children.length;
     
    console.log('Elements:', numbersElInCategory)

})


// const textHeaderEl = document.querySelectorAll('h2');


// const quantityEl0 = textHeaderEl[0].querySelectorAll('li')
// console.log('Category', textHeaderEl[0].textContent)
// console.log('Elements', quantityEl0.length)

// const quantityEl1 = textHeaderEl[1].querySelectorAll('li')
// console.log('Category', textHeaderEl[1].textContent)
// console.log('Elements', quantityEl1.length)

// const quantityEl2 = textHeaderEl[2].querySelectorAll('li')
// console.log('Category', textHeaderEl[2].textContent)
// console.log('Elements', quantityEl1.length)


