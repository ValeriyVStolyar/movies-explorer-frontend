import React from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import {ERROR_MESSAGE_FOR_UBSENT_SEACH_LETTERS} from '../../../utils/constants';

function SeachForm(props) {
  const [keyLetters, setMovie] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const { pathname } = useLocation();
  const seachMovie = pathname === '/movies' ? props.onSeach : props.onSavedSeach;
  // const seachMovie = pathname === '/movies' ? props.onSeach : props.onSeach;

  console.log(keyLetters)
  console.log(seachMovie)

  function handleSeachMovieNames(e) {
    console.log(e.target.value)
    setMovie(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!keyLetters) {
      console.log('not keyLetters')
      setErrorMessage(ERROR_MESSAGE_FOR_UBSENT_SEACH_LETTERS);
      return;
    }
    console.log('keyLetters');
    console.log(errorMessage);
    // props.onSeach(keyLetters);
    seachMovie(keyLetters);
    setErrorMessage('');
  }

  return (
    <section className="buscar section section_size_narrow section_size_medium content__section">
      <form onSubmit={handleSubmit} className="seach buscar__seach">
        <label className="input-wrapper seach__input-wrapper">
          <input type="text" id="seach__input"
            name="film" placeholder="Фильм" className="input seach__input"
            minLength="2" maxLength="40"
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
        />
      </form>
    </section>
  );
}

export default SeachForm;
