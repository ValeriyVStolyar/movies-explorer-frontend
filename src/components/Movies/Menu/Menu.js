import React from 'react';
import './Menu.css';
import { Link, useLocation } from 'react-router-dom';
import pathAccount from '../../../images/__account.svg';


function SeachForm({ isOpen, onClose }) {

  const { pathname } = useLocation();
  const activeMainPage = `${pathname === '/' ? 'menu__list-item_active' : 'menu__list-item_default'}`;
  const activeMoviesPage = `${pathname === '/movies' ? 'menu__list-item_active' : 'menu__list-item_default'}`;
  const activeSavedMoviesPage = `${pathname === '/saved-movies' ? 'menu__list-item_active' : 'menu__list-item_default'}`;


  return (
    // <section className={`popup popup_type_${name} ${isOpen && "popup_open"}`}>
    <section className={`popup ${isOpen && "popup_open"} section`}>
      <article className="menu">
        <nav className="navigation menu__navigation">
          <button type="button" className="button menu__cross" onClick={onClose}></button>
          <ul className="menu__list">
            <li className={`menu__list-item ${activeMainPage}`}>
              <Link onClick={onClose} to="/" rel="noopener"
              className="link menu__list-link">Главная</Link>
            </li>
            <li className={`menu__list-item ${activeMoviesPage}`}>
              <Link onClick={onClose} to="/movies" rel="noopener"
              className="link menu__list-link">Фильмы</Link>
            </li>
            <li className={`menu__list-item ${activeSavedMoviesPage}`}>
              <Link onClick={onClose} to="/saved-movies" rel="noopener"
              className="link menu__list-link">Сохранённые фильмы</Link>
            </li>
            <li className="menu__list-item">
              <Link onClick={onClose} to="/profile" rel="noopener"
              className="link account-link header__account-link">
                <img className="header__account-image" src={pathAccount} alt="Иконка с изображением человечка" />
                <p className="header__account-text">Аккаунт</p>
              </Link>
            </li>
          </ul>
        </nav>
      </article>
    </section>
  );
}

export default SeachForm;

