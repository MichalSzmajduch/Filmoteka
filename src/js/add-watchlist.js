import { Notify } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

// const watchedButton = document.querySelector('#watchedButtonLibrary');
let watchlist = JSON.parse(localStorage.getItem('movieWatchlist')) || [];
console.log(watchlist);
export function addToWatchlist(movieData) {
  const movieId = movieData.id;
  const isMovieInWatchlist = watchlist.some(movieInWatchlist => {
    if (movieInWatchlist.id === movieId) {
      return true;
    } else {
      return false;
    }
  });

  if (!isMovieInWatchlist) {
    watchlist.push(movieData);
    localStorage.setItem('movieWatchlist', JSON.stringify(watchlist));
    Notify.success(`Added movie "${movieData.title}" to watchlist.`);
  } else {
    Notify.failure(`Movie "${movieData.title}" is already in watchlist.`);
  }
}

export function displayWatchlist(watchlist) {
  console.log(watchlist);
}
