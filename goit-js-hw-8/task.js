'use strict'

import gallery from './galleryItems.js';

const galleryRef = document.querySelector('.gallery');
const lightBoxImg = document.querySelector('.lightbox___image');
const lightBox = document.querySelector('.lightbox');

function createGallery() {
  let stringImg = '';
  gallery.forEach(li => {
    stringImg += `<li class="gallery__item">
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
  return stringImg;
}

function insertGalary() {
  galleryRef.insertAdjacentHTML('beforeend', createGallery());
}

galleryRef.addEventListener('click', e => {
  e.preventDefault();
  if (e.target !== e.currentTarget) {
    lightBoxImg.src = e.target.getAttribute('data-source');
	lightBox.classList.add('is-open');

  }
});

lightBox.addEventListener('click', (e) =>{
  if (e.target !== lightBoxImg) {
    exitLightbox();
  }
})

addEventListener('keyup', () => {
  if (event.keyCode === 27 && lightBox.classList.contains('is-open')) {
    exitLightbox();
  }
});

function exitLightbox() {
  lightBox.classList.remove('is-open');
  lightBoxImg.src = '';
};

insertGalary();
