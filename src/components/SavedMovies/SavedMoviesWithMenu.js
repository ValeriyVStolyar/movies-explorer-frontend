import React, { useContext } from 'react';
import './SavedMovies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import SeachForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Menu from '../Movies/Menu/Menu';

function SavedMoviesWithMenu({
}) {
  return (
    <div className="page__container">
      <Header />
      <main className="content page__content">
        <SeachForm />
        <MoviesCardList />
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

export default SavedMoviesWithMenu;
