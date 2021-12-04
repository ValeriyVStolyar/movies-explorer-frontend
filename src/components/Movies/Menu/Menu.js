import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import pathAccount from '../../../images/__account.svg';

function SeachForm({ isOpen
}) {
  return (
    <section className="popup_open">
      <article className="menu section">
        <nav className="navigation menu__navigation">
          <div className="menu__cross"></div>
          <ul className="menu__list">
            <li className="menu__list-item menu__list-item_default">
              <Link to="/" rel="noopener"
              className="link menu__list-link">Главная</Link>
            </li>
            <li className="menu__list-item menu__list-item_active">
              <Link to="/movies" rel="noopener"
              className="link menu__list-link">Фильмы</Link>
            </li>
            <li className="menu__list-item menu__list-item_default">
              <Link to="/saved-movies" rel="noopener"
              className="link menu__list-link">Сохранённые фильмы</Link>
            </li>
            <li className="menu__list-item">
              <Link to="/profile" rel="noopener"
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

{/* <article className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}></article> */}
