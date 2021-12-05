import React from 'react';
import './MoviesCard.css';
import pathMovie from '../../../images/__movie.jpg';
import pathSign from '../../../images/__savedV.svg';

function MoviesCard({
}) {
  return (
      <li class="movies__list-item">
        <button type="button" className="button movies__button" aria-label="Сохранить">
          <p className="movies__text">Сохранить</p>
        </button>
        <figure class="movies__item">
          <img src={pathMovie} alt="Фильм" class="movies__photo" />
          <figcaption class="movies__caption">Название фильма</figcaption>
          <p className="movies__duration">1ч 17м</p>
        </figure>
      </li>
  );
}

export default MoviesCard;
