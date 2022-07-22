import React from 'react';
import './Logined.css';
import { Link, useLocation } from 'react-router-dom';
import pathAccount from '../../../images/__account.svg';


function Logined({ onOpenMenu }) {

  const { pathname } = useLocation();
  const activeMoviesPage = `${pathname === '/movies' ? 'header__movies-link_active' : ''}`;
  const activeSavedMoviesPage = `${pathname === '/saved-movies' ? 'header__movies-link_active' : ''}`;


  return (
    <div className="header__navigate">
      <div className="header__navigate_large">
        <ul className="header__movies-list">
          <li className="header__movies-item">
            <Link to="/movies"
              className={
                `link header__movies-link ${activeMoviesPage}`
              }>Фильмы
            </Link>
          </li>
          <li className="header__movies-item">
            <Link to="/saved-movies"
              className={
                `link header__movies-link ${activeSavedMoviesPage}`
              }>Сохранённые фильмы</Link>
          </li>
        </ul>
        <Link to="/profile"
          className="link account-link header__account-link">
          <img className="header__account-image" src={pathAccount} alt="Иконка с изображением человечка" />
          <p className="header__account-text">Аккаунт</p>
        </Link>
      </div>
      <div className="header__navigate_middle">
        <button type="button" className="button header__burger"
          onClick={onOpenMenu} aria-label="Меню" >
          <div className="header__line"></div>
        </button>
      </div>
    </div>
  );
}

export default Logined;
