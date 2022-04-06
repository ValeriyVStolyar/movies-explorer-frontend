import React, { useEffect } from 'react';
import './Login.css';
import { Link, withRouter } from 'react-router-dom';
import pathLogo from '../../images/__logo.svg';
import { useFormWithValidation } from '../../utils/Validation';

function Login(props) {
  const {
    values, handleChange, errors, isValid,
    resetForm, validateEmail, validatePassword
  } = useFormWithValidation();

  useEffect(() => {
    resetForm({});
  }, []);

  function handleSubmit(e) {
    e.preventDefault()
    if (!values.password || !values.email) {
      return;
    }
    const { password, email } = values;
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
    <form onSubmit={handleSubmit} className="login__form" novalidate>
      <ul className="login__list">
        <li className="login__list-item">
          <label className="login__target">E-mail</label>
          <input type="email" id="login__input-email"
            name="email" placeholder="pochta@yandex.ru|"
            className="input login__input input_size_bold"
            minLength="2" maxLength="40" required
            value={values.email || ""}
            pattern={ validateEmail }
            onChange={handleChange} />
          <span className="login__input-error">{errors.email}</span>
        </li>
        <li className="login__list-item">
          <label className="login__target">Пароль</label>
          <input type="password" id="login__input-password"
            name="password" placeholder="" className="input login__input login_color_red"
            minLength="2" maxLength="40" required
            value={values.password || ""}
            pattern={ validatePassword }
            onChange={handleChange} />
          <span className="login__input-error">{errors.password}</span>
        </li>
      </ul>
      <button type="submit"
      className={
        `button login__button
        ${isValid && "login__button-ready-to-submit"}`
      }
      aria-label="Войти">
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
