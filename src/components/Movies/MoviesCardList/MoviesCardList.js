import React from 'react';
import './MoviesCardList.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import pathMovie from '../../../images/__movie.jpg';

function MoviesCardList({
}) {
  return (
    <section class="saved-movies section section_size_narrow content__section">
    <ul class="saved-movies__list">
      <li class="saved-movies__list-item">
        <figure class="saved-movies__item">
          <img src={pathMovie} alt="Фильм" class="saved-movies__photo" />
          <figcaption class="saved-movies__caption">Название фильма</figcaption>
        </figure>
      </li>
      <li class="saved-movies__list-item">
        <figure class="saved-movies__item">
          <img src={pathMovie} alt="Фильм" class="saved-movies__photo" />
          <figcaption class="saved-movies__caption">Название фильма</figcaption>
        </figure>
      </li>
      <li class="saved-movies__list-item">
        <figure class="saved-movies__item">
          <img src={pathMovie} alt="Фильм" class="saved-movies__photo" />
          <figcaption class="saved-movies__caption">Название фильма</figcaption>
        </figure>
      </li>
      <li class="saved-movies__list-item">
        <figure class="saved-movies__item">
          <img src={pathMovie} alt="Фильм" class="saved-movies__photo" />
          <figcaption class="saved-movies__caption">Название фильма</figcaption>
        </figure>
      </li>
    </ul>
  </section>
  );
}

export default MoviesCardList;
