import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    item => `<li class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</li>`
  )
  .join('');

galleryList.innerHTML = markup;

galleryList.addEventListener('click', event => {
  event.preventDefault();

  const target = event.target;
  if (target.nodeName !== 'IMG') return;
  const largeImageURL = target.dataset.source;
  const instance = basicLightbox.create(`
        <img src="${largeImageURL}" width="800" height="600">
      `);

  instance.show();

  const closeLightbox = () => {
    instance.close();
    document.removeEventListener('keydown', handleKeyPress);
  };

  const handleKeyPress = event => {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  };

  instance.element().addEventListener('click', closeLightbox);
  document.addEventListener('keydown', handleKeyPress);

  console.log(largeImageURL);
});

console.log(galleryList);

console.log(galleryItems);
