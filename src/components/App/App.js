import React from 'react';
import './App.css';
import { Redirect, Switch, Route, useHistory, withRouter } from "react-router-dom";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Notfoundpage from '../Notfoundpage/Notfoundpage';
import Preloader from '../Movies/Preloader/Preloader';


function App() {
  return (
    <div className="page page__container">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/preloader">
          <Preloader />
        </Route>
        <Route path="/*">
          <Notfoundpage />
        </Route>
      </Switch>
      <Footer />

    </div>
  );
}

export default withRouter(App);
