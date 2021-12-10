import React from 'react';
import './Movies.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import SeachForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies({ onOpenMenu
}) {
  return (
    <div className="page__container">
      <Header onOpenMenu={onOpenMenu}/>
      <main className="content page__content">
        <SeachForm />
        <MoviesCardList />
      </main>
      <Footer />
    </div>
  );
}

export default Movies;
