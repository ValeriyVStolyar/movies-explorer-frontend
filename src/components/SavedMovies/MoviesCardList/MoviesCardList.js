import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
}) {
  return (
    <section class="saved-movies section section_size_narrow content__section">
      <ul class="saved-movies__list">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      <div className="saveddevider"></div>
    </section>
  );
}

export default MoviesCardList;
