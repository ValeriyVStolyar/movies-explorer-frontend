import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import pathLogo from '../../images/logo.svg'

function Header({ email, onSignOut, loggedIn }) {
  const { pathname } = useLocation();
  const link = `${pathname === '/signup' ? 'signin' : 'signup'}`;
  const text = `${pathname === '/signup' ? 'войти' : 'регистрация'}`;

  return (
    <header className="header">
      <Link to="/" rel="noopener" className="logo"></Link>
      {loggedIn
        ? (<ul className="header__list">
          <li className="header__text">{email}</li>
          <li className="header__text">
            <Link to={link} className="header__link" onClick={onSignOut}>выйти</Link>
          </li>
        </ul>
        ) : (<p className="header__text">
          <Link to={link} className="header__link" onClick={onSignOut}>{text}</Link>
        </p>)
      }
    </header>

    // <header className="header">
    // <Link to="" className="header__logo"><img src="pathLogo" alt="Логотип маленький круг"
    //     className="logo__image"></Link>
    // <ul className="header__auth-list">
    //   <li className="header__auth-item"><Link to="" className="header__auth-link">регистрация</Link></li>
    //   <li className="button header__auth-item header__button"><Link to=""
    //       className="header__auth-link header__auth-link_active">войти</Link></li>
    // </ul>
    // </header>
  );
}

export default Header;
