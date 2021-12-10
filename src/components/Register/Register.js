import React from 'react';
import './Register.css';
import { Link, withRouter } from 'react-router-dom';
import pathLogo from '../../images/__logo.svg';

function Register(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');

  console.log(props.onRegister)

  function handleChangeName(e) {
    console.log(e.target.value)
    setName(e.target.value)
  }

  function handleChangeEmail(e) {
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  function handleChangePassword(e) {
    console.log(e.target.value)
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!password || !email) {
      return;
    }
    console.log(password, email, name)
    props.onRegister(password, email, name);
  }

  return (
    <section className="register section section_size_super-narrow content__section">
      <div className="content__upper">
        <Link to="/" className="link logo register__logo">
          <img src={pathLogo} alt="Логотип маленький круг"
            className="logo__image" />
        </Link>
        <h3 className="content__title">Добро пожаловать!</h3>
      </div>
      <form onSubmit={handleSubmit} className="register__form">
        <ul className="register__list">
          <li className="register__list-item">
            <label className="register__target">Имя</label>
            <input type="text" id="register__input-name"
              name="name" placeholder="Виталий" className="input register__input"
              minLength="2" maxLength="40" required
              onChange={handleChangeName} />
          </li>
          <li className="register__list-item">
            <label className="register__target">E-mail</label>
            <input type="email" id="register__input-email"
              name="email" placeholder="pochta@yandex.ru|" className="input input_size_bold register__input"
              minLength="2" maxLength="40" required
              onChange={handleChangeEmail} />
          </li>
          <li className="register__list-item">
            <label className="register__target">Пароль</label>
            <input type="password" id="register__input-password"
              name="password" placeholder="••••••••••••••" className="input register__input register_color_red"
              minLength="2" maxLength="40" required
              onChange={handleChangePassword} />
          </li>
        </ul>
        <span className="register__input-error  register_color_red">Что-то пошло не так...</span>
        <button type="submit" className="button register__button" aria-label="Зарегистрироваться">
          <p className="register__button-text">Зарегистрироваться</p>
        </button>
      </form>
      <div className="register__login">
        <p className="register__subtitle">Уже зарегистрированы?</p>
        <Link to="/signin" className="link register__login-link" aria-label="Войти">
          <p className="register__link-text">Войти</p>
        </Link>
      </div>
    </section>
  );
}

export default withRouter(Register);
