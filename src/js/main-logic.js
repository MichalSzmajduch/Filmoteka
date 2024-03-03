import { drawMovies } from './draw-movie';

const form = document.querySelector('.search-form');
const searchField = document.querySelector('[name="searchQuery"]');
const moviesGallery = document.querySelector('.gallery__list');
const btnLoadMore = document.getElementById('loadMore');

let inputValue = '';
let currentPage = 0;
const pageSize = 18;

form.addEventListener('submit', function (event) {
  event.preventDefault();
  currentPage = 0;

  inputValue = searchField.value;
  moviesGallery.innerHTML = '';

  drawMovies(inputValue, currentPage, pageSize);
});

drawMovies(searchField.value, currentPage, pageSize);

btnLoadMore.addEventListener('click', () => {
  currentPage++;
  drawMovies(inputValue, currentPage, pageSize);
});
