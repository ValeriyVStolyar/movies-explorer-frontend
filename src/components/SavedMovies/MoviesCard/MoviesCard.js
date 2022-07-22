import React, { useEffect } from 'react';
import './MoviesCard.css';
import {
  TOTAL_SEC_IN_A_MINUT
} from '../../../utils/constants';


function MoviesCard(props) {
  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / TOTAL_SEC_IN_A_MINUT);
    let minutes = mins % TOTAL_SEC_IN_A_MINUT;
    return `${hours}ч ${minutes}м`;
  };

  function handleDelete() {
    props.onMovieDelete(props.savedMovie);
  }


  return (
    <li class="saved-movies__list-item">
      <button type="button" className="button saved-movies__button"
      onClick={handleDelete} aria-label="Удалить">
        <div className="saved-movies__cross"></div>
      </button>
      <figure class="saved-movies__item">
        <img src={`${props.savedMovie.image}`}
        alt={`Фильм ${props.savedMovie.nameRU}`} class="saved-movies__photo" />
        <figcaption class="saved-movies__caption">{props.savedMovie.nameRU}</figcaption>
        <p className="saved-movies__duration">{getTimeFromMins(props.savedMovie.duration)}</p>
      </figure>
    </li>
  );
}

export default MoviesCard;
