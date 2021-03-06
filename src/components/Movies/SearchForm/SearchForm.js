import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import {ERROR_MESSAGE_FOR_UBSENT_SEACH_LETTERS} from '../../../utils/constants';

function SeachForm(props) {
  const seachMoviesValue = JSON.parse(localStorage.getItem('seach')) || '';
  const seachSavedMoviesValue = '';
  const { pathname } = useLocation();
  const seachMovies = pathname === '/movies' ? seachMoviesValue : seachSavedMoviesValue;
  const [keyLetters, setKeyLetters] = React.useState(seachMovies);
  const [errorMessage, setErrorMessage] = React.useState('');
  const seachMovie = pathname === '/movies' ? props.onSeach : props.onSavedSeach;


  function handleSeachMovieNames(e) {
    setKeyLetters(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!keyLetters) {
      setErrorMessage(ERROR_MESSAGE_FOR_UBSENT_SEACH_LETTERS);
      return;
    }
    seachMovie(keyLetters);
    setErrorMessage('');
  }


  return (
    <section className="buscar section section_size_narrow section_size_medium content__section">
      <form onSubmit={handleSubmit} className="seach buscar__seach">
        <label className="input-wrapper seach__input-wrapper">
          <input type="text" id="seach__input" value={keyLetters}
            name="film" placeholder="Фильм" className="input seach__input"
            onChange={handleSeachMovieNames} />
          <button type="submit" className="button seach__button"
            on aria-label="Поиск">
            <p className="seach__text">Поиск</p>
          </button>
        </label>
        <span className="seach__input-error">{errorMessage}</span>
        <FilterCheckbox
          onChangeShortMovies={props.onChangeShortMovies}
          onChangeShortSavedMovies={props.onChangeShortSavedMovies}
          shortSavedMoviesOn={props.shortSavedMoviesOn}
        />
      </form>
    </section>
  );
}

export default SeachForm;
