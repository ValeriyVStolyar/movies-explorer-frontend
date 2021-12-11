import React, { useContext } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({ onOpenMenu, onUpdateUser, onSignOut
}) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="page__container">
      <Header
        onOpenMenu={onOpenMenu}
      />
      <section className="profile section content__section">
        <h3 className="profile__title">Привет, {currentUser.name}!</h3>
        <div className="profile__wrapper">
          <ul className="profile__list">
            <li className="profile__list-item">
              <p className="profile__data">Имя</p>
            </li>
            <li className="profile__list-item">
              <p className="profile__data">{currentUser.name}</p>
            </li>
          </ul>
          <ul className="profile__list">
            <li className="profile__list-item">
              <p className="profile__data">E-mail</p>
            </li>
            <li className="profile__list-item">
              <p className="profile__data">{currentUser.email}</p>
            </li>
          </ul>
        </div>
        <button type="button" className="button profile__button"
          onClick={onUpdateUser} aria-label="Дополнительно">
          <p className="profile__text profile_color_white">Редактировать</p>
        </button>
        <button type="button" className="button profile__button"
          onClick={onSignOut} aria-label="Дополнительно">
          <p className="profile__text profile_color_red">Выйти из аккаунта</p>
        </button>
      </section>
    </div>
  );
}

export default Profile;
