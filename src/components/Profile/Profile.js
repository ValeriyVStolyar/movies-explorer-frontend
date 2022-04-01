import React, { useState, useContext } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({ onOpenMenu, onUpdateUser, onSignOut }) {

  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  React.useEffect(() => {
    setName(currentUser.user.name);
    setEmail(currentUser.user.email);
  // }, [currentUser, onOpenMenu]);
  }, [currentUser]);
  // }, [currentUser, onUpdateUser]);

  function handleSubmit(e) {
    e.preventDefault()
    if (!currentUser.user.name || !currentUser.user.email) {
      console.log('go away')
      return;
    }
    onUpdateUser({
      name,
      email,
    });
  }

  return (
    <div className="page__container">
      <Header
        onOpenMenu={onOpenMenu}
      />
      <section className="profile section content__section">
        <h3 className="profile__title">Привет, {name}!</h3>
        <form onSubmit={handleSubmit} className="profile__wrapper"
          action="#" method="PATCH">
          <ul className="profile__list">
            <li className="profile__list-item">
              <p className="profile__data">Имя</p>
            </li>
            <li className="profile__list-item">
              <input type="name" id="profile-name"
                name="name" placeholder={name}
                className="input profile__data"
                minLength="2" maxLength="40" required
                value={name || ''}
                // value={currentUser.user.name || ''}
                onChange={handleChangeName} />
            </li>
          </ul>
          <ul className="profile__list">
            <li className="profile__list-item">
              <p className="profile__data">E-mail</p>
            </li>
            <li className="profile__list-item">
              <input type="email" id="profile-email"
                name="email" placeholder={email}
                className="input profile__data"
                minLength="2" maxLength="40" required
                value={email || ''}
                // value={currentUser.user.email || ''}
                onChange={handleChangeEmail} />
            </li>
          </ul>
          <div className="profile__buttons-block">
            <button type="submit" className="button profile__button"
              // onClick={onUpdateUser}
              aria-label="Редактировать">
              <p className="profile__text profile_color_white">Редактировать</p>
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
