import React from 'react';
import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SeachForm({
}) {
  return (
    <section className="buscar section section_size_medium content__section">
      <form className="seach buscar__seach">
        <label className="input-wrapper seach__input-wrapper">
          <input type="text" id="seach__input"
            name="film" placeholder="Фильм" className="input seach__input"
            minLength="2" maxLength="40" required />
          <button type="button" className="button seach__button" aria-label="Поиск">
            <p className="seach__text">Поиск</p>
          </button>
          <span className="seach__input-error"></span>
        </label>
        <FilterCheckbox />
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
