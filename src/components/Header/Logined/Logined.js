import React from 'react';
import './Logined.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import pathAccount from '../../../images/__account.svg';

function Logined({
}) {

  const { pathname } = useLocation();
  const link = `${pathname === '/movies' ? 'movies-temporary' : 'saved-movies-temporary'}`;

  return (
    <div className="header__navigate">
      <div className="header__navigate_large">
        <ul className="header__movies-list">
          <li className="header__movies-item">
            <Link to="/movies"
            className="link header__movies-link">Фильмы</Link>
          </li>
          <li className="header__movies-item">
            <Link to="/saved-movies"
            className="link header__movies-link">Сохранённые фильмы</Link>
          </li>
        </ul>
        <Link to="/profile"
        className="link account-link header__account-link">
          <img className="header__account-image" src={pathAccount} alt="Иконка с изображением человечка" />
          <p className="header__account-text">Аккаунт</p>
        </Link>
      </div>
      <div className="header__navigate_middle">
        <Link to={link} className="link header__burger">
          <div className="header__line">
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Logined;
