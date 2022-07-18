import React from 'react';
import './SavedMovies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import SeachForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';


function SavedMovies({
  onOpenMenu, onSeach, onChangeShortMovies,
  savedMovies, onMovieDelete, onSavedSeach,
  loading, message, loggedIn, seachedKeyLetters
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
          onSavedSeach={onSavedSeach}
          onChangeShortMovies={onChangeShortMovies}
        />
        <MoviesCardList
          savedMovies={savedMovies}
          onMovieDelete={onMovieDelete}
          loading={loading}
          message={message}
          seachedKeyLetters={seachedKeyLetters}
        />
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies;
