import React, { useContext } from 'react';
import './SavedMovies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import SeachForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function SavedMovies({ onOpenMenu, onSeach, savedMovies, onMovieDelete }) {

  return (
    <div className="page__container">
      <Header
        onOpenMenu={onOpenMenu}
      />
      <main className="content page__content">
        <SeachForm />
        <MoviesCardList
          savedMovies={savedMovies}
          onMovieDelete={onMovieDelete}
        />
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies;
