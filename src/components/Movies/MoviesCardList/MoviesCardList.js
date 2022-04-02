import React, {useCallback, useEffect, useState} from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
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


function MoviesCardList({
  movies, savedMovies, onSaveMovie, message,
  shortMoviesOn, onMovieDelete, loading
}) {

  const windowWidth = window.innerWidth;
  let [movieRows, setMovieRows] = useState(0);
  const [buttonMore, setButtonMore] = useState('_ubsent');

  const distributeMovies = useCallback(() => {
    if (windowWidth > TRESHOLD_WIDTH_MAX) {
      setMovieRows(INCEPTION_MOVIES_QUANTITY_MAX);
    } else if (windowWidth <= TRESHOLD_WIDTH_MAX && windowWidth > TRESHOLD_WIDTH_MEDIUM) {
      setMovieRows(INCEPTION_MOVIES_QUANTITY_MEDIUM);
    } else {
      setMovieRows(INCEPTION_MOVIES_QUANTITY_MINIMUM);
    }
  }, [windowWidth]);

  const checkButtonMore = (quantityMovies) => {
    if (quantityMovies < movies.length) {
      setButtonMore('_present')
    } else {
      setButtonMore('_ubsent');
    }
  }

  useEffect(() => {
    checkButtonMore(movieRows);
    distributeMovies();
  }, [movies]);

    const handleClick = () => {
      if (windowWidth > TRESHOLD_WIDTH_MAX) {
        movieRows = movieRows + EDDITIONAL_MOVIES_QUANTITY_MAXIMUM;
        setMovieRows(movieRows);
      } else {
        movieRows = movieRows + EDDITIONAL_MOVIES_QUANTITY_MINIMUM;
        setMovieRows(movieRows);
      }
      checkButtonMore(movieRows);
  };

  React.useEffect(() => {
    setTimeout(distributeMovies, 10000);
    window.addEventListener("resize", distributeMovies);
    return () => {
      window.removeEventListener("resize", distributeMovies);
    };
  }, []);


  return (
    <section class="movies section section_size_narrow content__section">
      { loading && <Preloader /> }
      { message && <div className="movies__block-message">
        <p className="movies__message">{ message }</p>
      </div>
      }
      <>
      <ul class="movies__list">
        {movies.slice(0, movieRows).map(movie => (
          <MoviesCard
            movie={movie}
            savedMovies={savedMovies}
            onSaveMovie={onSaveMovie}
            shortMoviesOn={shortMoviesOn}
            onMovieDelete={onMovieDelete}
            key={movie.id}
          />
        )
        )}
      </ul>
      <div class={`additional additional_visibility${buttonMore}`}>
        <button type="button" className="button additional__button"
          onClick={handleClick} aria-label="Дополнительно">
          <p className="additional__text">Ещё</p>
        </button>
      </div>
      </>
    </section>
  );
}


//   return (
//     <section class="movies section section_size_narrow content__section">
//       {loading ? (
//       <Preloader />
//       ) : (
//       <>
//       <ul class="movies__list">
//         {movies.slice(0, movieRows).map(movie => (
//           <MoviesCard
//             movie={movie}
//             savedMovies={savedMovies}
//             onSaveMovie={onSaveMovie}
//             shortMoviesOn={shortMoviesOn}
//             onMovieDelete={onMovieDelete}
//             key={movie.id}
//           />
//         )
//         )}
//       </ul>
//       <div class={`additional additional_visibility${buttonMore}`}>
//         <button type="button" className="button additional__button"
//           onClick={handleClick} aria-label="Дополнительно">
//           <p className="additional__text">Ещё</p>
//         </button>
//       </div>
//       </>
//       )}
//     </section>
//   );
// }

export default MoviesCardList;
