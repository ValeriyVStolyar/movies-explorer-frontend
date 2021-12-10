import React, { useEffect, useState } from 'react';
import './Logined.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import pathAccount from '../../../images/__account.svg';
import Menu from '../../Movies/Menu/Menu';

function Logined({ onOpenMenu, isOpen
}) {
console.log(onOpenMenu)
  const [isAddMenuPopupOpen, setIsAddMenuPopupOpen] = React.useState(false);

  // const handleMenuClick = () => {
  //   setIsAddMenuPopupOpen(true);
  //   console.log('test')
  //   console.log(isAddMenuPopupOpen)
  // }

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
        {/* <Link to={link} className="link header__burger">
          <div className="header__line">
          </div>
        </Link> */}
        <button type="button" className="button header__burger"
        aria-label="Меню" onClick={onOpenMenu}>
          <div className="header__line"></div>
        </button>
      </div>
    </div>
  );
}

export default Logined;
