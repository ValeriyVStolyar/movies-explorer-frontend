import React from 'react';
import './Login.css';
import { Link, withRouter } from 'react-router-dom';
import pathLogo from '../../images/__logo.svg';

function Login(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  function handleChangePassword(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!password || !email) {
      return;
    }
    props.onLogin(password, email);
  }

  return (
    <section className="login section section_size_super-narrow content__section">
    <div className="content__upper">
      <Link to="/" className="link logo login__logo">
        <img src={pathLogo} alt="Логотип маленький круг"
          className="logo__image" />
      </Link>
      <h3 className="content__title">Рады видеть!</h3>
    </div>
    <form onSubmit={handleSubmit} className="login__form">
      <ul className="login__list">
        <li className="login__list-item">
          <label className="login__target">E-mail</label>
          <input type="email" id="login__input-email"
            name="email" placeholder="pochta@yandex.ru|" className="input login__input input_size_bold"
            minLength="2" maxLength="40" required
            onChange={handleChangeEmail} />
        </li>
        <li className="login__list-item">
          <label className="login__target">Пароль</label>
          <input type="password" id="login__input-password"
            name="password" placeholder="" className="input login__input login_color_red"
            minLength="2" maxLength="40" required
            onChange={handleChangePassword} />
        </li>
      </ul>
      <button type="submit" className="button login__button" aria-label="Войти">
        <p className="login__button-text">Войти</p>
      </button>
    </form>
    <div className="login__register">
      <p className="login__subtitle">Ещё не зарегистрированы?</p>
      <Link to="/signup" className="link login__register-link" aria-label="Регистрация">
        <p className="login__link-text">Регистрация</p>
      </Link>
    </div>
  </section>
  );
}

export default withRouter(Login);
