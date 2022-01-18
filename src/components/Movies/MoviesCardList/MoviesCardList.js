import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { Link, useHistory, useLocation } from 'react-router-dom';
import pathMovie from '../../../images/__movie.jpg';
import pathSign from '../../../images/__savedV.svg';
import Preloader from '../Preloader/Preloader';
import {
  TRESHOLD_WIDTH_MAX,
  TRESHOLD_WIDTH_MEDIUM,
  INCEPTION_MOVIES_QUANTITY_MAX,
  INCEPTION_MOVIES_QUANTITY_MEDIUM,
  INCEPTION_MOVIES_QUANTITY_MINIMUM,
  EDDITIONAL_MOVIES_QUANTITY_MAXIMUM,
  EDDITIONAL_MOVIES_QUANTITY_MINIMUM,
} from '../../../utils/constants';
import { useEffect } from 'react/cjs/react.development';

function MoviesCardList({ movies, onSaveMovie, shortMoviesOn, onMovieDelete, loading
}) {

  const windowWidth = window.innerWidth;
  let [movieRows, setMovieRows] = React.useState(0);
  // const [buttonMore, setButtonMore] = React.useState('_present');
  const [buttonMore, setButtonMore] = React.useState('_ubsent');

  // const distributeMovies = React.useCallback(() => {
  // const distributeMovies = () => {
  const distributeMovies = React.useEffect(() => {
    if (windowWidth > TRESHOLD_WIDTH_MAX) {
      // setMovieRows(12 + additionalMovies);
      setMovieRows(INCEPTION_MOVIES_QUANTITY_MAX);
    } else if (windowWidth <= TRESHOLD_WIDTH_MAX && windowWidth > TRESHOLD_WIDTH_MEDIUM) {
      setMovieRows(INCEPTION_MOVIES_QUANTITY_MEDIUM);
    } else {
      setMovieRows(INCEPTION_MOVIES_QUANTITY_MINIMUM);
    }
  }, [windowWidth]);
  // }, []);

  const checkButtonMore = (quantityMovies) => {
    // while (quantityMovies < movies.length) {
    //   setButtonMore('_present');
    //   console.log(buttonMore)
    if (quantityMovies < movies.length) {
      setButtonMore('_present')
    } else {
      setButtonMore('_ubsent');
    }
  }

  useEffect(() => {
    checkButtonMore(movieRows);
  // }, [movies, movieRows])
  }, [])

    const handleClick = () => {
      if (windowWidth > TRESHOLD_WIDTH_MAX) {
        movieRows = movieRows + EDDITIONAL_MOVIES_QUANTITY_MAXIMUM;
        setMovieRows(movieRows);
        console.log(movieRows)
      } else {
        movieRows = movieRows + EDDITIONAL_MOVIES_QUANTITY_MINIMUM;
        setMovieRows(movieRows);
        console.log(movieRows)
      }
      checkButtonMore(movieRows);
  };

  // const handleClick = () => {
  //   console.log('test')
  //   console.log(windowWidth)
  //   console.log(movieRows)
  //   // let additionalMovies = 0
  //   // if (movieRows < movies.length) {
  //   if (movieRows < movies.length) {
  //     if (windowWidth > TRESHOLD_WIDTH_MAX) {
  //       // additionalMovies = movieRows + EDDITIONAL_MOVIES_QUANTITY_MAXIMUM;
  //       movieRows = movieRows + EDDITIONAL_MOVIES_QUANTITY_MAXIMUM;
  //       // setMovieRows(movieRows + 3);
  //       // setMovieRows(additionalMovies);
  //       setMovieRows(movieRows);
  //       console.log(movieRows)
  //       // console.log(additionalMovies)
  //     } else {
  //       // additionalMovies = movieRows + EDDITIONAL_MOVIES_QUANTITY_MINIMUM;
  //       movieRows = movieRows + EDDITIONAL_MOVIES_QUANTITY_MINIMUM;
  //       // setMovieRows(movieRows + 2);
  //       // setMovieRows(additionalMovies);
  //       setMovieRows(movieRows);
  //       console.log(movieRows)
  //       // console.log(additionalMovies)
  //     }
  //   } else {
  //     console.log('basta');
  //     setButtonMore('_ubsent');
  //   };
  // };

  // React.useEffect(() => distributeMovies(), [distributeMovies]);
  // React.useEffect(() => distributeMovies(), [distributeMovies, handleClick]);
  // React.useEffect(() => distributeMovies(), [distributeMovies, windowWidth]);

  React.useEffect(() => {
    setTimeout(distributeMovies, 10000);
    window.addEventListener("resize", distributeMovies);
    return () => {
      window.removeEventListener("resize", distributeMovies);
    };
  }, []);

  // useEffect(() => {
  //   const listener = () => {
  //      console.log('resize')
  //    }

  //    window.addEventListener("resize", listener);

  //   return () => {
  //     window.removeListener('resize', listener)
  //   }
  //  }, [])

  return (
    <section class="movies section section_size_narrow content__section">
      {loading ? (
      <Preloader />
      ) : (
      <>
      <ul class="movies__list">
        {/* <MoviesCard /> */}
        {/* <MoviesCard
          movie={movie}
        /> */}
        {movies.slice(0, movieRows).map(movie => (
          <MoviesCard
            movie={movie}
            onSaveMovie={onSaveMovie}
            shortMoviesOn={shortMoviesOn}
            // onMovieClick={onMovieClick}
            // onMovieLike={onMovieLike}
            onMovieDelete={onMovieDelete}
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
      <div class={`additional additional_visibility${buttonMore}`}>
        {/* {buttonMore} */}
        <button type="button" className="button additional__button"
          onClick={handleClick} aria-label="Дополнительно">
          <p className="additional__text">Ещё</p>
        </button>
      </div>
      </>
      )}
    </section>
  );
}

export default MoviesCardList;
