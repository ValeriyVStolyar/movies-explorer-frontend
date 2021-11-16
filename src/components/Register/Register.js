import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Register(props) {

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
  //   props.onRegister(password, email);
  // }

  return (
    <main className="content page__content">

      <h1>Register</h1>

      {/* <section className="registration">
        <form onSubmit={handleSubmit} className="registration__form">
          <h1 className="registration__title">регистрация</h1>
          <input id="registration__email" type="text" name="email" placeholder="Email"
            className="registration__input registration__input_type_email"
            minLength="2" maxLength="30" value={email} required onChange={handleChangeEmail} />
          <span className="registration__input-error registration__email-error"></span>
          <input id="registration__password" type="password" name="password" placeholder="Пароль"
            className="registration__input registration__input_type_password"
            value={password} required onChange={handleChangePassword} />
          <span className="registration__input-error registration__password-error"></span>
          <button type="submit" aria-label="Сохранить"
            className="button button_type_login">зарегистрироваться</button>
          <p><Link to="singin" className="registration__subtitle">уже зарегистрированы&#63; Войти</Link></p>
        </form>
      </section> */}
    </main>
  );
}

export default withRouter(Register);

