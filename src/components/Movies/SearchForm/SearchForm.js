import React from 'react';
import './SearchForm.css';

function SeachForm({
}) {
  return (
    <section className="short-movies section section_size_narrow content__section">
      <form className="seach short-movies__seach">
        <label className="short-movies__input-wrapper">
          <input type="text" id="short-movies__input"
            name="film" placeholder="Фильм" className="short-movies__input"
            minLength="2" maxLength="40" required />
          <button type="button" className="button short-movies__button" aria-label="Поиск">
            <p className="short-movies__text">Поиск</p>
          </button>
          <span className="short-movies__input-error"></span>
        </label>
        <label className="short-movies__tumb">
          <p className="short-movies__description-tumb">
            <input type="radio" className="short-movies__button-tumb"
              name="films" value="short-movies" checked />Короткометражки
      </p>
        </label>
      </form>
    </section>
  );
}

export default SeachForm;
