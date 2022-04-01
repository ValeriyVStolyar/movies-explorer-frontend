import React, { useEffect, useState } from 'react';
import './MoviesCard.css';
import pathMovie from '../../../images/__movie.jpg';

function MoviesCard(props) {

  console.log(props.savedMovie)
  // console.log(props.seachedSavedMovies)

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  };

function handleDelete() {
  props.onMovieDelete(props.savedMovie);
  // props.onMovieDelete(props.seachedSavedMovies);
}

// const { pathname } = useLocation();
// const backgroundColor = `${pathname === '/' ? 'header_background-color_blue' : 'header_background-color_black'}`;
// const authorize = pathname === '/' ? <Unauthorised /> : <Logined onOpenMenu={onOpenMenu} />;

// function handleClick() {
//   if (saved == '-save') {
//     props.onSaveMovie(props.movie);
//     console.log(props.movie)
//     setSaved('-saved'); // .....
//     setContentInsideButton(<img src={savePath} alt="Галочка сохранено" className="movies__saved-image" />)
//   } else {
//     setSaved('-save');
//     setContentInsideButton(<p className="movies__text-save">Сохранить</p>);
//   }
// }


  return (
    <li class="saved-movies__list-item">
      <button type="button" className="button saved-movies__button"
      onClick={handleDelete} aria-label="Удалить">
        <div className="saved-movies__cross"></div>
      </button>
      <figure class="saved-movies__item">
        {/* <img src={`https://api.nomoreparties.co${props.savedMovie.image.url}`} */}
        <img src={`${props.savedMovie.image}`}
        alt={`Фильм ${props.savedMovie.nameRU}`} class="saved-movies__photo" />
        <figcaption class="saved-movies__caption">{props.savedMovie.nameRU}</figcaption>
        <p className="saved-movies__duration">{getTimeFromMins(props.savedMovie.duration)}</p>
      </figure>
    </li>
  );
}

export default MoviesCard;
