import React from 'react';
import './Movies.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import SeachForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies({
  onOpenMenu,
  onSeach,
  movies,
  onSaveMovie,
  shortMoviesOn,
  onMovieDelete,
  loading
}) {

  return (
    <div className="page__container">
      <Header onOpenMenu={onOpenMenu}/>
      <main className="content page__content">
        <SeachForm
          onSeach={onSeach}
          shortMoviesOn={shortMoviesOn}
        />
        <MoviesCardList
          movies={movies}
          onSaveMovie={onSaveMovie}
          shortMoviesOn={shortMoviesOn}
          onMovieDelete={onMovieDelete}
          loading={loading}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Movies;
