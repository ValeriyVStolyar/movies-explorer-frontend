import React from 'react';
import './Header.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import pathLogo from '../../images/__logo.svg'

function Header({ }) {
  const { pathname } = useLocation();


  return (
    <header className="header section page__header">
    <Link to="/" rel="noopener" className="header__logo">
      <img src={pathLogo} alt="Логотип маленький круг"
        className="logo__image" />
    </Link>
    <ul className="header__auth-list">
      <li className="header__auth-item">
        <Link to="/signup" className="header__auth-link">регистрация</Link>
      </li>
      <li className="button header__auth-item header__button">
        <Link to="/signin" className="header__auth-link header__auth-link_active">войти</Link>
      </li>
    </ul>
    </header>
  );
}

export default Header;
