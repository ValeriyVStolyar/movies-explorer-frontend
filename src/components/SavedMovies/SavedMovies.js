import React, { useContext } from 'react';
import './SavedMovies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function SavedMovies ({
})
{
  return (
    <main className="content page__content">
      <MoviesCardList />
    </main>
  );
}

export default SavedMovies;
