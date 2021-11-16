import React from 'react';
import './Movies.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import SeachForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies({
}) {
  return (
    <main className="content page__content">
      <SeachForm />
      <MoviesCardList />
    </main>
  );
}

export default Movies;
