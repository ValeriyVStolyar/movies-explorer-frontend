import React, {
  useEffect,
  useState
} from 'react';
import './App.css';
import {
  Redirect,
  Switch,
  Route,
  useHistory,
  withRouter
} from "react-router-dom";
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Notfoundpage from '../Notfoundpage/Notfoundpage';
import Preloader from '../Movies/Preloader/Preloader';
import Menu from '../Movies/Menu/Menu';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import api from '../../utils/MainApi';
import * as auth from '../../utils/auth';
import apiMovies from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {
  ERROR_MESSAGE_FOR_STUCKED_SERVER,
  ERROR_MESSAGE_FOR_UBSENT_MOVIE,
  ERROR_MESSAGE_FOR_NOT_REGISTATION,
  ERROR_MESSAGE_FOR_NOT_HAVE_TOKEN,
  ERROR_MESSAGE_FOR_NOT_INTER,
  ERROR_MESSAGE_FOR_NOT_HAVE_USER,
  ERROR_MESSAGE_FOR_NOT_UPDATE_USER,
  ERROR_MESSAGE_FOR_GET_MOVIES,
  ERROR_MESSAGE_FOR_GET_SAVED_MOVIES,
  ERROR_MESSAGE_FOR_ADDING_MOVIES,
  ERROR_MESSAGE_FOR_DELETE_MOVIES,
} from '../../utils/constants'
import Header from '../Header/Header';


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const [isAddMenuPopupOpen, setIsAddMenuPopupOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [shortMoviesOn, setShortMoviesOn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = (password, email, name) => {
    auth.register(password, email, name)
      .then((result) => {
        if (result) {
          history.push('/movies');
        }
      })
      .catch((err) => {
        console.log(ERROR_MESSAGE_FOR_NOT_REGISTATION);
      });
  }

  const checkToken = () => {
    auth.getContent()
      .then((res) => {
        setCurrentUser(res);
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => console.log(ERROR_MESSAGE_FOR_NOT_HAVE_TOKEN));
  }

  const handleLogin = (password, email) => {
    auth.authorize(password, email)
      .then((res) => {
        setLoggedIn(true);
        history.push('/movies');
        checkToken();
      })
      .catch((err) => {
        console.log(ERROR_MESSAGE_FOR_NOT_INTER)
      });
  }

  const handleMenuClick = () => {
    setIsAddMenuPopupOpen(true);
  }

  const handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  }

  const closeAllPopups = () => {
    setIsAddMenuPopupOpen(false);
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    }
  })

  useEffect(() => {
    api.getUserInfo()
      .then((result) => {
        setCurrentUser(result);
      })
      .catch(err => console.log(ERROR_MESSAGE_FOR_NOT_HAVE_USER));
  }, [])

  const handleUpdateUserSubmit = (user) => {
    api.setUserInfo(user)
      .then((result) => {
        setCurrentUser(result);
        history.push('/movies');
      })
      .catch(err => console.log(ERROR_MESSAGE_FOR_NOT_UPDATE_USER));
  }

  React.useEffect(() => {
    checkToken();
  }, [history]);

  function signOut() {
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.clear();
    history.push('/');
  }

  const handleShortMovies = (boolMeaning) => {
    setShortMoviesOn(boolMeaning);
  }

  useEffect(() => {
    api.getMovies()
      .then((result) => {
        setSavedMovies(checkShortMovies(result.data));
      })
      .catch(err => console.log(ERROR_MESSAGE_FOR_GET_SAVED_MOVIES));
  }, [shortMoviesOn])

  const checkShortMovies = (movies) => {
    let shortMovies = movies.filter((item) => {
      if (shortMoviesOn == true) {
        return item.duration <= 40;
      }
      if (shortMoviesOn == false) {
        return item.duration > 40;
      } else {
        setMessage(ERROR_MESSAGE_FOR_STUCKED_SERVER);
      }
    })
    return shortMovies;
  }

  const handleSeachMovies = (seachKeyLetters) => {
    setLoading(true)
    apiMovies.getMoviesInfo()
      .then((result) => {
        const seachMovies = result.filter((item) => {
          return item.nameRU.toLowerCase().includes(seachKeyLetters.toLowerCase());
        });
        if (seachMovies.length === 0) {
          setLoading(false)
          setMessage(ERROR_MESSAGE_FOR_UBSENT_MOVIE);
          setMovies([]);
        }
        else if (seachMovies.length != 0) {
          setLoading(false);
          setMovies(checkShortMovies(seachMovies));
          setMessage('');
        }
        else {
          setMessage(ERROR_MESSAGE_FOR_STUCKED_SERVER);
        }
        history.push('/movies');
      })
      .catch(err => console.log(ERROR_MESSAGE_FOR_GET_MOVIES));
  }

  const handleSeachSavedMovies = (seachKeyLetters) => {
    setLoading(true);
    const seachMovies = savedMovies.filter((item) => {
      return item.nameRU.toLowerCase().includes(seachKeyLetters.toLowerCase());
    });
    if (seachMovies.length === 0) {
      setLoading(false);
      setMessage(ERROR_MESSAGE_FOR_UBSENT_MOVIE);
      setSavedMovies([]);
    }
    else if (seachMovies.length != 0) {
      setLoading(false);
      setSavedMovies(seachMovies);
      setMessage('');
    }
    else {
      setMessage(ERROR_MESSAGE_FOR_STUCKED_SERVER);
    }
    history.push('/saved-movies');
  }

  const handleSaveMovieSubmit = (newMovie) => {
    api.addMovie(newMovie)
      .then((result) => {
        setSavedMovies([result.data, ...savedMovies]);
        history.push('/movies');
      })
      .catch(err => console.log(ERROR_MESSAGE_FOR_ADDING_MOVIES));
  }

  function handleMovieDelete(savedMovie) {
    api.deleteMovie(savedMovie._id)
      .then(() => {
        setSavedMovies(savedMovies.filter(item =>
          item._id !== savedMovie._id)
        );
      })
      .catch(err => console.log(ERROR_MESSAGE_FOR_DELETE_MOVIES));
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page page__container">
        <Switch>
          <ProtectedRoute exact path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            onOpenMenu={handleMenuClick}
            onSeach={handleSeachMovies}
            movies={movies}
            onChangeShortMovies = {handleShortMovies}
            savedMovies={savedMovies}
            onSaveMovie={handleSaveMovieSubmit}
            onMovieDelete={handleMovieDelete}
            loading={loading}
            message={message}
           />
           <ProtectedRoute exact path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            onOpenMenu={handleMenuClick}
            onSavedSeach={handleSeachSavedMovies}
            savedMovies={savedMovies}
            onChangeShortMovies = {handleShortMovies}
            onMovieDelete={handleMovieDelete}
            loading={loading}
            message={message}
          />
          <ProtectedRoute exact path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onOpenMenu={handleMenuClick}
            onUpdateUser={handleUpdateUserSubmit}
            onSignOut={signOut}
          />
          <Route exact path="/">
            <Main
              loggedIn={loggedIn}
              onOpenMenu={handleMenuClick}
            />
          </Route>
          <Route path="/signin">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="/signup">
            <Register onRegister={handleRegister} />
          </Route>
          <Route path="/preloader">
            <Preloader />
          </Route>
          <Route path="/*">
            <Notfoundpage />
          </Route>
          <Route >
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
          </Route>
        </Switch>
        <Menu
          isOpen={isAddMenuPopupOpen}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
