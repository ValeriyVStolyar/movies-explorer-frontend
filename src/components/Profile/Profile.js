import React, { useEffect, useState, useContext } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/Validation';


function Profile({ loggedIn, onOpenMenu, onUpdateUser, onSignOut }) {

  const currentUser = useContext(CurrentUserContext);

  const [isNewValue, setIsNewValue] = useState(false);

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

  console.log(currentUser.user.name)
  console.log(currentUser.user.email)
  console.log(values.name)
  console.log(values.email)

  function handleSubmit(e) {
    e.preventDefault()
    if (!currentUser.user.name || !currentUser.user.email) {
      return;
    } else if (currentUser.user.name == values.name && currentUser.user.email == values.email) {
      console.log('test')
    } else
    onUpdateUser({
      name: values.name || currentUser.user.name,
      email: values.email || currentUser.user.email,
    });
  }


  return (
    <div className="page__container">
      <Header
        loggedIn={loggedIn}
        onOpenMenu={onOpenMenu}
      />
      <section className="profile section content__section">
        <h3 className="profile__title">Привет, {values.name || currentUser.user.name}!</h3>
        <form onSubmit={handleSubmit} className="profile__wrapper"
          action="#" method="PATCH">
          <ul className="profile__list">
            <li className="profile__list-item">
              <p className="profile__data">Имя</p>
            </li>
            <li className="profile__list-item">
              <input type="name" id="profile-name"
                name="name" placeholder={values.name || currentUser.user.name}
                className="input profile__data"
                minLength="2" maxLength="40" required
                value={values.name || currentUser.user.name}
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
                name="email" placeholder={values.email || currentUser.user.email}
                className="input profile__data"
                minLength="2" maxLength="40" required
                value={values.email || currentUser.user.email}
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
              <p className="profile__text profile_color_white">Редактировать</p>
            </button>
            <button type="button" className={
              `button profile__button
              ${isValid && "profile__button-ready-to-submit"}`
            }
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
