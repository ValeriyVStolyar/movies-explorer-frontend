import React, {useState} from 'react';
import './MoviesCard.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import pathMovie from '../../../images/__movie.jpg';
import pathSign from '../../../images/__savedV.svg';

// function MoviesCard({ movie, onMovieClick, onMovieLike, onMovieDelete }) {
function MoviesCard(props) {

  const [saved, setSaved] = useState('-save');

  console.log(props.movie)

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  };

  function handleClick() {
    if (saved == '-save') {
      props.onSaveMovie(props.movie);
      console.log(props.movie)
      setSaved('-saved'); // .....
    }
  }

  function handleDelete() {
    props.onMovieDelete();
  }

  // useEffect(() => {

  // }, [])


  return (
    <li class="movies__list-item">
      <button type="button" className={`button movies__button${saved}`}
        onClick={handleClick} aria-label="Сохранить">
        <p className="movies__text">Сохранить</p>
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
