import React, { useState, useContext } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({ onOpenMenu, onUpdateUser, onSignOut }) {

  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  console.log(currentUser)
  console.log(name)
  console.log(email)

  function handleChangeName(e) {
    setName(e.target.value)
    console.log(e.target.value)
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value)
    console.log(e.target.value)
  }

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    console.log(currentUser.data.name)
    console.log(currentUser.data.email)
    setName(currentUser.data.name);
    setEmail(currentUser.data.email);
    console.log(currentUser.data.name)
    console.log(currentUser.data.email)
    console.log(name)
    console.log(email)
  }, [currentUser, onOpenMenu]);
  // }, [currentUser, onUpdateUser]);

  function handleSubmit(e) {
    e.preventDefault()
    // if (!currentUser.name || !currentUser.email) {
    if (!'currentUser.name || !currentUser.email') {
      return;
    }
    onUpdateUser({
      // name: name,
      // email: email,
      name,
      email,
    });
  }
  console.log(currentUser)
  console.log(currentUser.data.name)
  console.log(currentUser.data.email)

  // function handleSubmit(e) {
  //   // Запрещаем браузеру переходить по адресу формы
  //   e.preventDefault();

  //   // Передаём значения управляемых компонентов во внешний обработчик
  //   onUpdateUser({
  //     name,
  //     about: description,
  //   });
  // }

  return (
    <div className="page__container">
      <Header
        onOpenMenu={onOpenMenu}
      />
      <section className="profile section content__section">
        <h3 className="profile__title">Привет, {name}!</h3>
        <form onSubmit={handleSubmit} className="profile__wrapper">
          <ul className="profile__list">
            <li className="profile__list-item">
              <p className="profile__data">Имя</p>
            </li>
            <li className="profile__list-item">
              <input type="name" id="profile-name"
                name="name" placeholder={name}
                className="input profile__data"
                minLength="2" maxLength="40" required
                // value={currentUser.name}
                value={name || ''}
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
                onChange={handleChangeEmail} />
            </li>
          </ul>
        </form>
        <button to="submit" className="button profile__button"
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

// function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const currentUser = useContext(CurrentUserContext);

//   function handleChangeName(e) {
//     setName(e.target.value);
//   }

//   function handleChangeDescription(e) {
//     setDescription(e.target.value);
//   }

//   // После загрузки текущего пользователя из API
//   // его данные будут использованы в управляемых компонентах.
//   React.useEffect(() => {
//     setName(currentUser.name);
//     setDescription(currentUser.about);
//   }, [currentUser, isOpen]);

//   function handleSubmit(e) {
//     // Запрещаем браузеру переходить по адресу формы
//     e.preventDefault();

//     // Передаём значения управляемых компонентов во внешний обработчик
//     onUpdateUser({
//       name,
//       about: description,
//     });
//   }

//   return (
//     <PopupWithForm
//       name="profile"
//       title="редактировать профиль"
//       isOpen={isOpen}
//       onClose={onClose}
//       save="Сохранить"
//       onSubmit={handleSubmit}>
//       <input id="popup__name" type="text" name="name" placeholder="Имя"
//         className="popup__input popup__input_type_name" value={name || ''}
//         minLength="2" maxLength="40" required onChange={handleChangeName} />
//       <span className="popup__input-error popup__name-error"></span>
//       <input id="popup__job" type="text" name="job" placeholder="О себе"
//         className="popup__input popup__input_type_job" value={description || ''}
//         minLength="2" maxLength="200" required onChange={handleChangeDescription} />
//       <span className="popup__input-error popup__job-error"></span>
//     </PopupWithForm>
//   )
// }
