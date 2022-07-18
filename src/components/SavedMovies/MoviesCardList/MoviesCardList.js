import React, {useState, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../../Movies/Preloader/Preloader';


function MoviesCardList({
  savedMovies, onMovieDelete, onChangeShortMoviesValue,
  loading, message, seachedKeyLetters
}) {
  const [seachMovies, setSeachMovies] = useState([]);
  const exposeMovies = seachMovies.length === 0 ? savedMovies : seachMovies;

  const filterShortMovies = (movies) => {
    return movies.filter((item) => item.duration <= 40);
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
      setSeachMovies(filterShortMovies(seachSavedMovies));
      return filterShortMovies(seachSavedMovies);
    }

    setSeachMovies(seachSavedMovies)
  }, [seachedKeyLetters, onChangeShortMoviesValue])

  useEffect(() => {
    setSeachMovies([]);
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
