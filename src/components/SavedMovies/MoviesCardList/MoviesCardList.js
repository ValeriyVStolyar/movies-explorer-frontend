import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({
  savedMovies, onMovieDelete, seachedSavedMovies, loading
}) {


  return (
    <section class="saved-movies section section_size_narrow content__section">
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
