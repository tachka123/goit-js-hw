import gallery from './galleryItems.js';

const galleryRef = document.querySelector('.gallery');
const lightBoxImg = document.querySelector('.lightbox___image');
const lightboxContent = document.querySelector('.lightbox__content');

const createGallery = function(gallery) {
  let stringImg = '';
  gallery.forEach(li => {
    stringImg =
      stringImg +
      `<li class="gallery__item">
	<a
	  class="gallery__link"
	  href="${li.original}"
	>
	  <img
		class="gallery__image"
		src="${li.preview}"
		data-source="${li.original}"
		alt="${li.description}"
	  />

	  <span class="gallery__icon">
		<i class="material-icons">zoom_out_map</i>
	  </span>
	</a>
  </li>`;
  });
  galleryRef.insertAdjacentHTML('beforeend', stringImg);
};

galleryRef.addEventListener('click', e => {
  e.preventDefault();
  if (e.target !== e.currentTarget) {
    lightBoxImg.src = e.target.getAttribute('data-source');
    document.querySelector('.lightbox').classList.add('is-open');
  }
});

lightboxContent.addEventListener('click', e => {
  if (e.target !== lightBoxImg) {
    exitLightbox();
  }
});

document.querySelector('.lightbox__button').addEventListener('click', e => {
  exitLightbox();
});

addEventListener('keyup', () => {
  if (event.keyCode === 27) {
    exitLightbox();
  }
});

const exitLightbox = function() {
  document.querySelector('.lightbox').classList.remove('is-open');
  lightBoxImg.src = '';
};

createGallery(gallery);
