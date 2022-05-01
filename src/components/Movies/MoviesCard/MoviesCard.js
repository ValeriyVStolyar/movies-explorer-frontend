import React, { useState } from 'react';
import './MoviesCard.css';
import savePath from '../../../images/__savedV.svg';
import {
  TOTAL_SEC_IN_A_MINUT
} from '../../../utils/constants';


function MoviesCard(props) {
  const [saved, setSaved] = useState('-save');

  let [contentInsideButton, setContentInsideButton] = useState(
    <p className="movies__text-save">Сохранить</p>
  );

  const curentMovie = props.savedMovies.find((elem) => {
    if (elem.movieId === props.movie.id) {
      return elem._id
    }
  })

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / TOTAL_SEC_IN_A_MINUT);
    let minutes = mins % TOTAL_SEC_IN_A_MINUT;
    return `${hours}ч ${minutes}м`;
  };

  function handleClick() {
    if (saved == '-save') {
      setSaved('-saved');
      setContentInsideButton(
      <img src={savePath} alt="Галочка сохранено"
      className="movies__saved-image" />)
      props.onSaveMovie(props.movie);
    } else {
      setSaved('-save');
      setContentInsideButton(
      <p className="movies__text-save">Сохранить</p>);
      props.onMovieDelete(curentMovie);
    }
  }


  return (
    <li class="movies__list-item">
      <button type="button" className={`button movies__button${saved}`}
        onClick={handleClick} aria-label="Сохранить">
        {contentInsideButton}
      </button>
      <a href={props.movie.trailerLink} rel="noopener" className="link movies__link">
        <figure class="movies__item">
          <img src={`https://api.nomoreparties.co${props.movie.image.url}`}
            alt={`Фильм ${props.movie.nameRU}`} class="movies__photo"
          />
          <figcaption class="movies__caption">{props.movie.nameRU}</figcaption>
          <p className="movies__duration">{getTimeFromMins(props.movie.duration)}</p>
        </figure>
      </a>
    </li>
  );
}

export default MoviesCard;
