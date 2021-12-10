import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import pathAccount from '../../../images/__account.svg';

function SeachForm({ name, title, isOpen, onClose, children, save, onSubmit
}) {

  console.log(isOpen)
  console.log(onClose)
  return (
    // <section className={`popup popup_type_${name} ${isOpen && "popup_open"}`}>
    <section className={`popup ${isOpen && "popup_open"} section`}>
      <article className="menu">
        <nav className="navigation menu__navigation">
          <button type="button" className="button menu__cross" onClick={onClose}></button>
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


{/* <article className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
<form action="#" method="POST" name={`Input-list-${name}`}
  className="popup__container popup__validate" onSubmit={onSubmit}>
  <button type="button" aria-label="Закрыть попап"
    className="button button_type_close" onClick={onClose}></button>
  <h2 className="popup__title">{title}</h2>
  {children}
  <button type="submit" aria-label="Сохранить"
    className="button button_type_submit">{save}</button>
</form>
</article> */}
