import React, {useState, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../../Movies/Preloader/Preloader';
import {PLAYBACK_DURATION} from '../../../utils/constants';


function MoviesCardList({
  savedMovies, onMovieDelete, onChangeShortMoviesValue,
  loading, message, seachedKeyLetters
}) {
  const [seachingMovies, setSeachingMovies] = useState([]);
  const exposeMovies = seachingMovies.length === 0 ? savedMovies : seachingMovies;

  const filterShortMovies = (movies) => {
    return movies.filter((item) => item.duration <= PLAYBACK_DURATION);
  }

  useEffect(() => {
    const seachSavedMovies = savedMovies.filter((item) => {
      const nameRu = String(item.nameRU).toLowerCase();
      const nameEn = String(item.nameRU).toLowerCase();
      return (
        nameRu.includes(seachedKeyLetters.toLowerCase().trim()) ||
        nameEn.includes(seachedKeyLetters.toLowerCase().trim())
      );
    });

    if(onChangeShortMoviesValue === '-on') {
      setSeachingMovies(filterShortMovies(seachSavedMovies));
      return filterShortMovies(seachSavedMovies);
    }

    setSeachingMovies(seachSavedMovies)
  }, [seachedKeyLetters, onChangeShortMoviesValue])

  useEffect(() => {
    setSeachingMovies([]);
  },[]);


  return (
    <section class="saved-movies section section_size_narrow content__section">
      { loading && <Preloader /> }
      { message && <div className="saved-movies__block-message">
        <p className="saved-movies__message">{ message }</p>
      </div>
      }
      <ul class="saved-movies__list">
        {(exposeMovies).map(savedMovie => (
          <MoviesCard
            savedMovie={savedMovie}
            onMovieDelete={onMovieDelete}
            key={savedMovie.id}
            seachedKeyLetters={seachedKeyLetters}
          />
        )
        )}
      </ul>
      <div className="saveddevider"></div>
    </section>
  );
}

export default MoviesCardList;
