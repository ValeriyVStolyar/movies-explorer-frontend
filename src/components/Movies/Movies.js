import React from 'react';
import './Movies.css';
import SeachForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies({
  loggedIn,
  onOpenMenu,
  onSeach,
  movies,
  onChangeShortMovies,
  savedMovies,
  onSaveMovie,
  onMovieDelete,
  loading,
  message,
  shortMoviesOn,
}) {

  return (
    <div className="page__container">
      <Header
        loggedIn={loggedIn}
        onOpenMenu={onOpenMenu}
      />
      <main className="content page__content">
        <SeachForm
          onSeach={onSeach}
          onChangeShortMovies={onChangeShortMovies}
          shortMoviesOn={shortMoviesOn}
        />
        <MoviesCardList
          movies={movies}
          savedMovies={savedMovies}
          onSaveMovie={onSaveMovie}
          onMovieDelete={onMovieDelete}
          loading={loading}
          message={message}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Movies;
