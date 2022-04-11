import React, { useEffect, useState, useContext } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/Validation';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import {
  MESSAGE_FOR_CHANGE_NAME_OR_EMAIL,
} from '../../utils/constants';


function Profile({
  loggedIn, onOpenMenu, onUpdateUser, onSignOut
}) {

  const currentUser = useContext(CurrentUserContext);

  const [isMessageChangeProfile, setIsMessageChangeProfile] = useState(false);
  const [messageChangeProfile, setMessageChangeProfile] = useState('');

  const {
    values, handleChange, errors, isValid,
    resetForm, validateEmail, validateName
  } = useFormWithValidation();
  if ( values.name == undefined ) {
    values.name = currentUser.user.name
  }

  if ( values.email == undefined ) {
    values.email = currentUser.user.email
  }

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    e.preventDefault()
    if (!currentUser.user.name || !currentUser.user.email) {
      return;
    }
    else if (
      currentUser.user.name == values.name &&
      currentUser.user.email == values.email
      ) {
      setIsMessageChangeProfile(true)
      setMessageChangeProfile(MESSAGE_FOR_CHANGE_NAME_OR_EMAIL)
    }
    else {
      onUpdateUser({
        name: values.name,
        email: values.email,
      });
    }
  }

  const closePopup = () => {
    setMessageChangeProfile('')
    setIsMessageChangeProfile(false);
  }


  return (
    <div className="page__container">
      <Header
        loggedIn={loggedIn}
        onOpenMenu={onOpenMenu}
      />
      <section className="profile section content__section">
        <h3 className="profile__title">Привет, {values.name}!</h3>
        <InfoTooltip
          isMessageChangeProfile={isMessageChangeProfile}
          messageChangeProfile={messageChangeProfile}
          onClose={closePopup}
        />
        <form onSubmit={handleSubmit} className="profile__wrapper"
          action="#" method="PATCH">
          <ul className="profile__list">
            <li className="profile__list-item">
              <p className="profile__data">Имя</p>
            </li>
            <li className="profile__list-item">
              <input type="name" id="profile-name"
                name="name" placeholder={values.name}
                className="input profile__data"
                minLength="2" maxLength="40" required
                value={values.name}
                pattern={ validateName }
                onChange={handleChange} />
            </li>
          </ul>
          <span className="profile__input-error">{errors.name}</span>
          <ul className="profile__list">
            <li className="profile__list-item">
              <p className="profile__data">E-mail</p>
            </li>
            <li className="profile__list-item">
              <input type="email" id="profile-email"
                name="email" placeholder={values.email}
                className="input profile__data"
                minLength="2" maxLength="40" required
                value={values.email}
                pattern={ validateEmail }
                onChange={handleChange} />
            </li>
          </ul>
          <span className="profile__input-error">{errors.email}</span>
          <div className="profile__buttons-block">
            <button type="submit" className={
              `button profile__button
              ${isValid && "profile__button-ready-to-submit"}`
            }
              aria-label="Редактировать">
              <p className="profile__text profile_color_white"
            >Редактировать</p>
            </button>
            <button type="button" className="button profile__button"
              onClick={onSignOut} aria-label="Выйти из аккаунта">
              <p className="profile__text profile_color_red">Выйти из аккаунта</p>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Profile;
