import React from 'react';
import './MoviesCard.css';
import pathMovie from '../../../images/__movie.jpg';
import pathDelete from '../../../images/__delete.svg';

function MoviesCard({
}) {
  return (
    <li class="saved-movies__list-item">
      <button type="button" className="button saved-movies__button" aria-label="Сохранить">
        {/* <img src={pathDelete} alt="Кнопка-крестик для удаления фильма" className="saved-movies__image"/> */}
        <div className="saved-movies__cross"></div>
      </button>
      <figure class="saved-movies__item">
        <img src={pathMovie} alt="Фильм" class="saved-movies__photo" />
        <figcaption class="saved-movies__caption">Название фильма</figcaption>
        <p className="saved-movies__duration">1ч 17м</p>
      </figure>
    </li>
  );
}

export default MoviesCard;
