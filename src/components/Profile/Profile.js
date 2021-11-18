import React from 'react';
import './Profile.css';

function Profile({
}) {
  return (
    <section className="profile section content__section">
      <h3 className="profile__title">Привет, Виталий!</h3>
      <div className="profile__wrapper">
        <ul className="profile__list">
          <li className="profile__list-item">
            <p className="profile__data">Имя</p>
          </li>
          <li className="profile__list-item">
            <p className="profile__data">Виталий</p>
          </li>
        </ul>
        <ul className="profile__list">
          <li className="profile__list-item">
            <p className="profile__data">E-mail</p>
          </li>
          <li className="profile__list-item">
            <p className="profile__data">pochta@yandex.ru</p>
          </li>
        </ul>
      </div>
      <button type="button" className="button profile__button" aria-label="Дополнительно">
        <p className="profile__text profile_color_white">Редактировать</p>
      </button>
      <button type="button" className="button profile__button" aria-label="Дополнительно">
        <p className="profile__text profile_color_red">Выйти из аккаунта</p>
      </button>
    </section>
  );
}

export default Profile;
