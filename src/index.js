import { fetchMovies } from './js/fetch';
import { drawMovies } from './js/draw-movie';
import { fetchMovieDetails } from './js/fetch';
import { showLoader, hideLoader } from './js/loader';
import './js/dark-mode';
import './sass/main.scss';
import { closeModal } from './js/modal-team';

const form = document.querySelector('.search-form');
const searchField = document.querySelector('[name="searchQuery"]');
const moviesGallery = document.querySelector('.gallery__list');

const btnLoadMore = document.getElementById('loadMore');

let inputValue = '';
let page = 1;

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const inputValue = searchField.value;

  moviesGallery.innerHTML = '';
  drawMovies([], inputValue);
  // musimy przywracać page do oryginalnej wartości żeby po nowym wyszukaniu wczytywać odpowiednią strone
  page = 1;
  hideLoader(); // Ukryj loader po zakończeniu wyszukiwania filmów
});

btnLoadMore.addEventListener('click', async () => {
  page += 1;
  const moreMovies = await fetchMovies(inputValue, page);
  if (moreMovies && moreMovies.length > 0) {
    await drawMovies(moreMovies, inputValue);
  } else {
    btnLoadMore.disabled = true;
    btnLoadMore.textContent = 'No More Movies';
  }
});

drawMovies(inputValue);
