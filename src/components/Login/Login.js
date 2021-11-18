import React from 'react';
import './Login.css';
import { Link, withRouter } from 'react-router-dom';
import pathLogo from '../../images/__logo.svg';

function Login(props) {

  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');

  // function handleChangeEmail(e) {
  //   setEmail(e.target.value)
  // }

  // function handleChangePassword(e) {
  //   setPassword(e.target.value)
  // }

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   if (!password || !email) {
  //     return;
  //   }
  //   props.onLogin(password, email);
  // }

  return (
    <section className="login section section_size_super-narrow content__section">
    <div className="content__upper">
      <Link to="/" className="logo login__logo">
        <img src={pathLogo} alt="Логотип маленький круг"
          className="logo__image" />
      </Link>
      <h3 className="content__title">Рады видеть!</h3>
    </div>
    <form className="login__form">
      <ul className="login__list">
        <li className="login__list-item">
          <label className="login__target">E-mail</label>
          <input type="email" id="login__input-email"
            name="email" placeholder="email" className="input input_size_bold login__input"
            minLength="2" maxLength="40" required />
        </li>
        <li className="login__list-item">
          <label className="login__target">Пароль</label>
          <input type="password" id="login__input-password"
            name="password" placeholder="Пароль" className="input login__input login_color_red"
            minLength="2" maxLength="40" required />
        </li>
      </ul>
      <button type="submit" className="button login__button" aria-label="Войти">
        <p className="login__text">Войти</p>
      </button>
    </form>
    <div className="login__register">
      <p className="login__subtitle">Ещё не зарегистрированы?</p>
      <Link to="/signup" className="login__register-link" aria-label="Регистрация">
        <p className="login__text">Регистрация</p>
      </Link>
    </div>
  </section>


      // <section className="registration">
      //   <form onSubmit={handleSubmit} className="registration__form">
      //     <h1 className="registration__title">вход</h1>
      //     <input id="registration__email" type="text" name="email" placeholder="email@mail.com"
      //       className="registration__input registration__input_type_email" value={email}
      //       minLength="2" maxLength="30" required onChange={handleChangeEmail} />
      //     <span className="registration__input-error registration__email-error"></span>
      //     <input id="registration__password" type="password" name="password"
      //       placeholder="••••••••••" className="registration__input registration__input_type_password"
      //       value={password} required onChange={handleChangePassword} />
      //     <span className="registration__input-error registration__password-error"></span>
      //     <button type="submit" aria-label="Сохранить"
      //       className="button button_type_login">войти</button>
      //   </form>
      // </section>

  );
}

export default withRouter(Login);
