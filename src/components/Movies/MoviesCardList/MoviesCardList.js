import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { Link, useHistory, useLocation } from 'react-router-dom';
import pathMovie from '../../../images/__movie.jpg';
import pathSign from '../../../images/__savedV.svg';

function MoviesCardList({ movies, onSaveMovie
}) {

  // const movies = props.movies || [];
  const windowWidth = window.innerWidth;
  let [movieRows, setMovieRows] = React.useState(0);

  // const distributeMovies = React.useCallback(() => {
  const distributeMovies = () => {
    if (windowWidth > 1279) {
      setMovieRows(12);
    } else if (windowWidth <= 1279 && windowWidth > 481) {
      setMovieRows(8);
    } else {
      setMovieRows(5);
    }
  };
  // }, [windowWidth]);

  const handleClick = () => {
    console.log('test')
    console.log(windowWidth)
    console.log(movieRows)
    if (windowWidth > 1279) {
      let additionalMovies = movieRows + 3;
      // setMovieRows(movieRows + 3);
      setMovieRows(additionalMovies);
      console.log(movieRows)
      console.log(additionalMovies)
    } else {
      setMovieRows(movieRows + 2);
    }
  };

  // React.useEffect(() => distributeMovies(), [distributeMovies]);
  React.useEffect(() => distributeMovies(), [distributeMovies, handleClick]);

  React.useEffect(() => {
    window.addEventListener("resize", distributeMovies);
    return () => {
      window.removeEventListener("resize", distributeMovies);
    };
  }, []);

  return (
    <section class="movies section section_size_narrow content__section">
      <ul class="movies__list">
        {/* <MoviesCard /> */}
        {/* <MoviesCard
          movie={movie}
        /> */}
        {movies.slice(0, movieRows).map(movie => (
          <MoviesCard
            movie={movie}
            onSaveMovie={onSaveMovie}
            // onMovieClick={onMovieClick}
            // onMovieLike={onMovieLike}
            // onMovieDelete={onMovieDelete}
            key={movie.id}
          />
        )
        )}
        {/* <li class="movies__list-item">
          <button type="button" className="button movies__button-saved" aria-label="Сохранить"
            onClick={onOpenMenu}>
            <img src={pathSign} alt="Знак, что фильм сохранен" className="movies__sign-saved" />
          </button>
          <figure class="movies__item">
            <img src={pathMovie} alt="Фильм" class="movies__photo" />
            <figcaption class="movies__caption">Название фильма</figcaption>
            <p className="movies__duration">1ч 17м</p>
          </figure>
        </li>
        <MoviesCard /> */}
        {/* <MoviesCard />
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
        <MoviesCard /> */}
      </ul>
      <div class="additional">
        <button type="button" className="button additional__button"
        onClick={handleClick} aria-label="Дополнительно">
          <p className="additional__text">Ещё</p>
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
