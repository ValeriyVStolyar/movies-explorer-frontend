import React, {useEffect, useState} from 'react';
import './MoviesCard.css';
import savePath from '../../../images/__savedV.svg';
import { Link, useHistory, useLocation } from 'react-router-dom';
import pathMovie from '../../../images/__movie.jpg';
import pathSign from '../../../images/__savedV.svg';

// function MoviesCard({ movie, onMovieClick, onMovieLike, onMovieDelete }) {
function MoviesCard(props) {

  const [saved, setSaved] = useState('-save');
  let [contentInsideButton, setContentInsideButton] = useState(<p className="movies__text-save">Сохранить</p>);

  const curentMovie = props.savedMovies.find((elem) => {
    if (elem.movieId === props.movie.id) {
      return elem._id
    }
  })

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  };

  function handleClick() {
    if (saved == '-save') {
      props.onSaveMovie(props.movie);
      console.log(props.movie)
      setSaved('-saved');
      setContentInsideButton(<img src={savePath} alt="Галочка сохранено" className="movies__saved-image" />)
    } else {
      setSaved('-save');
      setContentInsideButton(<p className="movies__text-save">Сохранить</p>);
      props.onMovieDelete(curentMovie);
      console.log(curentMovie)
    }
  }

  useEffect(() => {
    // handleClick()
  }, [])

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
