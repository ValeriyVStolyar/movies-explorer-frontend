import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import Unauthorised from './Unauthorized/Unauthorized';
import Logined from './Logined/Logined';
import pathLogo from '../../images/__logo.svg'

function Header({ onOpenMenu }) {

  const { pathname } = useLocation();
  const backgroundColor = `${pathname === '/' ? 'header_background-color_blue' : 'header_background-color_black'}`;
  const authorize = pathname === '/' ? <Unauthorised /> : <Logined onOpenMenu={onOpenMenu} />;

  return (
    <header className={`header ${backgroundColor} section page__header`}>
    <Link to="/" rel="noopener" className="link header__logo">
      <img src={pathLogo} alt="Логотип маленький круг"
        className="logo__image" />
    </Link>
    {authorize}
    </header>
  );
}

export default Header;
