import React from 'react';
import './Unauthorized.css';
import { Link } from 'react-router-dom';

function Unauthorized({
}) {
  return (
    <ul className="header__auth-list">
      <li className="header__auth-item">
        <Link to="/signup" className="link header__auth-link">регистрация</Link>
      </li>
      <li className="button header__auth-item header__button">
        <Link to="/signin" className="link header__auth-link header__auth-link_active">войти</Link>
      </li>
    </ul>
  );
}

export default Unauthorized;
