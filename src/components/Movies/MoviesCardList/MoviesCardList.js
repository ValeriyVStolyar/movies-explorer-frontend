import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { Link, useHistory, useLocation } from 'react-router-dom';
import pathMovie from '../../../images/__movie.jpg';
import pathSign from '../../../images/__savedV.svg';

function MoviesCardList({
}) {
  return (
    <section class="movies section section_size_narrow content__section">
      <ul class="movies__list">
        <MoviesCard />
        <li class="movies__list-item">
        <button type="button" className="button movies__button-saved" aria-label="Сохранить">
          <img src={pathSign} alt="Знак, что фильм сохранен" className="movies__sign-saved" />
        </button>
        <figure class="movies__item">
          <img src={pathMovie} alt="Фильм" class="movies__photo" />
          <figcaption class="movies__caption">Название фильма</figcaption>
          <p className="movies__duration">1ч 17м</p>
        </figure>
      </li>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <li class="movies__list-item">
        <button type="button" className="button movies__button-saved" aria-label="Сохранить">
          <img src={pathSign} alt="Знак, что фильм сохранен" className="movies__sign-saved" />
        </button>
        <figure class="movies__item">
          <img src={pathMovie} alt="Фильм" class="movies__photo" />
          <figcaption class="movies__caption">Название фильма</figcaption>
          <p className="movies__duration">1ч 17м</p>
        </figure>
      </li>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      <div class="additional">
        <button type="button" className="button additional__button" aria-label="Дополнительно">
          <p className="additional__text">Ещё</p>
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
