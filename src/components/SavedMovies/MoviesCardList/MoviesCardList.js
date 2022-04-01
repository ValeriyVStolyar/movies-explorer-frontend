import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Movies from '../../Movies/Movies';

function MoviesCardList({
  savedMovies, onMovieDelete, seachedSavedMovies, loading
}) {

  console.log(savedMovies)

  return (
    <section class="saved-movies section section_size_narrow content__section">
      <ul class="saved-movies__list">
        {/* <MoviesCard
          savedMovie={savedMovie}
        /> */}
        {/* {savedMovies.map(savedMovie => ( */}
        {/* {(savedMovies || seachedSavedMovies).map(savedMovie => ( */}
        {(savedMovies).map(savedMovie => (
          <MoviesCard
            savedMovie={savedMovie}
            // seachedSavedMovie={seachedSavedMovie}
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
