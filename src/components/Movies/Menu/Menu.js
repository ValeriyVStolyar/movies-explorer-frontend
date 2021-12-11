import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import pathAccount from '../../../images/__account.svg';

function SeachForm({ name, title, isOpen, onClose, children, save, onSubmit
}) {

  return (
    // <section className={`popup popup_type_${name} ${isOpen && "popup_open"}`}>
    <section className={`popup ${isOpen && "popup_open"} section`}>
      <article className="menu">
        <nav className="navigation menu__navigation">
          <button type="button" className="button menu__cross" onClick={onClose}></button>
          <ul className="menu__list">
            <li className="menu__list-item menu__list-item_default">
              <Link onClick={onClose} to="/" rel="noopener"
              className="link menu__list-link">Главная</Link>
            </li>
            <li className="menu__list-item menu__list-item_active">
              <Link onClick={onClose} to="/movies" rel="noopener"
              className="link menu__list-link">Фильмы</Link>
            </li>
            <li className="menu__list-item menu__list-item_default">
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

