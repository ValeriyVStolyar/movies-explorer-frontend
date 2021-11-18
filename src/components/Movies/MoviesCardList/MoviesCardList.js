import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { Link, useHistory, useLocation } from 'react-router-dom';

function MoviesCardList({
}) {
  return (
    <section class="movies section section_size_narrow content__section">
      <ul class="movies__list">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      <div class="additional">
        <button type="button" className="button additional__button" aria-label="Дополнительно">
          <p className="additional__text">Ещё</p>
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
