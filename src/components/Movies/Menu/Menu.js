import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import pathAccount from '../../../images/__account.svg';

function SeachForm({
}) {
  return (
    <section className="menu section">
      <nav className="navigation menu__navigation">
          <div className="menu__cross"></div>
        <ul className="menu__list">
          <li className="menu__list-item menu__list-item_default">
            <Link to="/" rel="noopener" className="menu__list-link" target="_blank">Главная</Link>
          </li>
          <li className="menu__list-item menu__list-item_active">
            <Link to="/movies" rel="noopener" className="menu__list-link" target="_blank">Фильмы</Link>
          </li>
          <li className="menu__list-item menu__list-item_default">
            <Link to="/saved-movies" rel="noopener" className="menu__list-link" target="_blank">Сохранённые фильмы</Link>
          </li>
          <li className="menu__list-item">
            <Link to="/profile" className="account-link header__account-link">
              <img className="header__account-image" src={pathAccount} alt="Иконка с изображением человечка" />
              <p className="header__account-text">Аккаунт</p>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default SeachForm;
