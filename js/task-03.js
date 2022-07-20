const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesEl = images
  .map(image => {
    const imgEl = `<li><img class="gallery-list" src="${image.url}" alt="${image.alt}"/></li>`;
    return imgEl;
  })
  .join(" ");

const groupEl = document.querySelector('.gallery');
groupEl.insertAdjacentHTML('afterbegin', imagesEl);


// const imagesEl = images.map(image => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('list')
//   const imgEl = document.createElement('img');
//   imgEl.src = image.url;
//   imgEl.alt = image.alt;
//   imgEl.width = 100;
//   itemEl.append(imgEl)
//    return itemEl;
// }
 
// )

// console.log(groupEl);
// groupEl.append(...imagesEl)

