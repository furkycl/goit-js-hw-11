import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchimages } from './fetchimages.js';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('#loader');

const lightbox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = e.target.searchQuery.value.trim();

  if (!query) return;

  gallery.innerHTML = '';
  loader.classList.remove('hidden');

  try {
    const images = await fetchimages(query);

    if (images.length === 0) {
      iziToast.info({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      const markup = images.map(createImageCard).join('');
      gallery.innerHTML = markup;
      lightbox.refresh();
    }
  } catch (err) {
    iziToast.error({
      message: 'An error occurred while fetching images.',
      position: 'topRight',
    });
  } finally {
    loader.classList.add('hidden');
  }
});

function createImageCard(img) {
  return `
    <a href="${img.largeImageURL}" class="photo-card">
      <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
      <div class="info">
        <p><b>Likes:</b> ${img.likes}</p>
        <p><b>Views:</b> ${img.views}</p>
        <p><b>Comments:</b> ${img.comments}</p>
        <p><b>Downloads:</b> ${img.downloads}</p>
      </div>
    </a>
  `;
}
