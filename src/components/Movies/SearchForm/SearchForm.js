import React from 'react';
import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SeachForm(props) {
  const [movie, setMovie] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  console.log(props)
  console.log(props.onSeach)
  console.log('movie')
  console.log(movie)
  console.log(errorMessage)

  function handleSeachMovieNames(e) {
    console.log(e.target.value)
    setMovie(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!movie) {
      setErrorMessage('Нужно ввести ключевое слово');
      console.log(errorMessage)
      return;
    }
    console.log(errorMessage);
    props.onSeach(movie);
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
          {/* <span className="seach__input-error">{errorMessage}</span> */}
        </label>
        <span className="seach__input-error">{errorMessage}</span>
        <FilterCheckbox
          shortMoviesOn={props.shortMoviesOn}
        />
        {/* <label className="movies__tumb">
          <p className="movies__description-tumb">
            <input type="radio" className="movies__button-tumb"
              name="films" value="movies" checked />Короткометражки
      </p>
        </label> */}
      </form>
    </section>
  );
}

export default SeachForm;
