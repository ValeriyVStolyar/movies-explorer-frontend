import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../../Movies/Preloader/Preloader';


function MoviesCardList({
  savedMovies, onMovieDelete,
  loading, message
}) {


  return (
    <section class="saved-movies section section_size_narrow content__section">
      { loading && <Preloader /> }
      { message && <div className="saved-movies__block-message">
        <p className="saved-movies__message">{ message }</p>
      </div>
      }
      <ul class="saved-movies__list">
        {(savedMovies).map(savedMovie => (
          <MoviesCard
            savedMovie={savedMovie}
            onMovieDelete={onMovieDelete}
            key={savedMovie.id}
          />
        )
        )}
      </ul>
      <div className="saveddevider"></div>
    </section>
  );
}

export default MoviesCardList;
