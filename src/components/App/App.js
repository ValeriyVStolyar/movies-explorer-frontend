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
  withRouter,
  useLocation
} from "react-router-dom";
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Notfoundpage from '../Notfoundpage/Notfoundpage';
import Menu from '../Movies/Menu/Menu';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import api from '../../utils/MainApi';
import * as auth from '../../utils/auth';
import apiMovies from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import {
  ERROR_MESSAGE_FOR_STUCKED_SERVER,
  MESSAGE_FOR_UBSENT_MOVIE,
  ERROR_MESSAGE_FOR_NOT_REGISTATION,
  ERROR_MESSAGE_FOR_NOT_HAVE_TOKEN,
  ERROR_MESSAGE_FOR_NOT_INTER,
  ERROR_MESSAGE_FOR_NOT_HAVE_USER,
  ERROR_MESSAGE_FOR_NOT_UPDATE_USER,
  ERROR_MESSAGE_FOR_GET_MOVIES,
  ERROR_MESSAGE_FOR_GET_SAVED_MOVIES,
  ERROR_MESSAGE_FOR_ADDING_MOVIES,
  ERROR_MESSAGE_FOR_DELETE_MOVIES,
  ERROR_MESSAGE_FOR_NOT_LOGOUT,
  SUCCESS_AUTHORIZATION,
  MESSAGE_FOR_NOT_OK,
} from '../../utils/constants';


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const [isAddMenuPopupOpen, setIsAddMenuPopupOpen] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem('lsMovies')) || [],
  );
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedAfterSeachMovies, setSavedAfterSeachMovies] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);

  const { pathname } = useLocation();
  const activePathPage = `${pathname === '/movies' ? '/movies' : '/saved-movies'}`;


  const handleRegister = (password, email, name) => {
    auth.register(password, email, name)
      .then((result) => {
        if (result) {
          handleLogin(password, email);
        }
      })
      .catch((err) => {
        console.log(ERROR_MESSAGE_FOR_NOT_REGISTATION);
      });
  }

  const checkToken = () => {
    auth.getContent()
      .then((result) => {
        setCurrentUser(result);
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => console.log(ERROR_MESSAGE_FOR_NOT_HAVE_TOKEN));
  }

  const handleLogin = (password, email) => {
    auth.authorize(password, email)
      .then((result) => {
        checkToken();
        setIsSuccess(true);
        setIsInfoTooltipPopupOpen(true);
        setMessage(SUCCESS_AUTHORIZATION);
      })
      .catch((err) => {
        console.log(ERROR_MESSAGE_FOR_NOT_INTER);
        setIsSuccess(false);
        setIsInfoTooltipPopupOpen(true);
        setMessage(MESSAGE_FOR_NOT_OK);
      });
  }

  React.useEffect(() => {
    checkToken();
  }, []);

  const handleLogout = () => {
    auth.logout()
      .catch((err) => {
        console.log(ERROR_MESSAGE_FOR_NOT_LOGOUT)
      });
  }

  function signOut() {
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.clear();
    setMovies([]);
    setSavedMovies([]);
    setMessage('');
    handleLogout();
    setIsInfoTooltipPopupOpen(false);
    history.push('/');
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
    setMessage('');
    setIsInfoTooltipPopupOpen(false);
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
        setIsInfoTooltipPopupOpen(true);
        setIsSuccess(true)
      })
      .catch(err => console.log(ERROR_MESSAGE_FOR_NOT_UPDATE_USER));
      setIsSuccess(false);
      setIsInfoTooltipPopupOpen(true);
  }

  useEffect(() => {
    apiMovies.getMoviesInfo()
      .then((result) => {
        setAllMovies(result);
        history.push('/movies');
      })
      .catch(err => console.log(ERROR_MESSAGE_FOR_GET_MOVIES));
  }, [])

  const handleSeachMovies = (seachKeyLetters) => {
    setLoading(true)
    localStorage.setItem('seach', JSON.stringify(seachKeyLetters));
    const seachInputValue = JSON.parse(localStorage.getItem('seach'));
    const seachMovies = allMovies.filter((item) => {
      const nameRu = String(item.nameRU).toLowerCase();
      const nameEn = String(item.nameRU).toLowerCase();
      return (
        nameRu.includes(seachInputValue.toLowerCase().trim()) ||
        nameEn.includes(seachInputValue.toLowerCase().trim())
      );
    });
    if (seachMovies.length === 0) {
      setLoading(false)
      setMessage(MESSAGE_FOR_UBSENT_MOVIE);
      setMovies([]);
    }
    else if (seachMovies.length != 0) {
      setLoading(false);
      localStorage.setItem('lsMovies', JSON.stringify((seachMovies) || []));
      setMessage('');
      const lookinkMovies = JSON.parse(localStorage.getItem('lsMovies'))
      const lengthMovies = checkShortMovies(lookinkMovies)
      setMovies(lengthMovies);
    }
    else {
      setMessage(ERROR_MESSAGE_FOR_STUCKED_SERVER);
      setLoading(false);
    }
  }

  const handleShortMovies = (checkboxState) => {
    localStorage.setItem('checkbox', JSON.stringify(checkboxState));
  }

  const handleShortSavedMovies = (checkboxState) => {
    localStorage.setItem('checkboxsaved', JSON.stringify(checkboxState));
    checkShortMovies(movies)
  }

  useEffect(() => {
    api.getMovies()
      .then((result) => {
        const veryOwnMovies = result.data.filter((item) => {
          if(currentUser.user) {
            return item.owner === currentUser.user._id;
          }
        });
        setSavedMovies(veryOwnMovies);
      })
      .catch(err => console.log(ERROR_MESSAGE_FOR_GET_SAVED_MOVIES));
  }, [loggedIn]);

  const checkShortMovies = (movies) => {
    let shortMovies = movies.filter((item) => {
      if (JSON.parse(localStorage.getItem('checkbox')) === '-on') {
        return item.duration <= 40;
      }
      if (JSON.parse(localStorage.getItem('checkbox')) === '-off') {
        return item.duration > 40;
      }
      if (JSON.parse(localStorage.getItem('checkbox')) === null) {
        return item
      }
      else {
        setMessage(ERROR_MESSAGE_FOR_STUCKED_SERVER);
      }
    })
    return shortMovies;
  }

  const checkShortSavedMovies = (movies) => {
    let shortMovies = movies.filter((item) => {
      if (JSON.parse(localStorage.getItem('checkboxsaved')) === '-on') {
        return item.duration <= 40;
      }
      if (JSON.parse(localStorage.getItem('checkboxsaved')) === '-off') {
        return item.duration > 40;
      }
      if (JSON.parse(localStorage.getItem('checkboxsaved')) === null) {
        return item;
      }
      else {
        setMessage(ERROR_MESSAGE_FOR_STUCKED_SERVER);
      }
    })
    return shortMovies;
  }

  const handleSeachSavedMovies = (seachKeyLetters) => {
    const seachMovies = savedMovies.filter((item) => {
      const nameRu = String(item.nameRU).toLowerCase();
      const nameEn = String(item.nameRU).toLowerCase();
      return (
        nameRu.includes(seachKeyLetters.toLowerCase().trim()) ||
        nameEn.includes(seachKeyLetters.toLowerCase().trim())
      );
    });

    const moviesForExposition = checkShortSavedMovies(seachMovies)
    if (moviesForExposition.length === 0) {
      setLoading(false);
      setMessage(MESSAGE_FOR_UBSENT_MOVIE);
      setSavedMovies([]);
    }
    else if (moviesForExposition.length != 0) {
      setLoading(false);
      setSavedAfterSeachMovies(moviesForExposition);
      setMessage('');
    }
    else {
      setMessage(ERROR_MESSAGE_FOR_STUCKED_SERVER);
    }
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
        setSavedAfterSeachMovies(savedAfterSeachMovies.filter(item =>
          item._id !== savedMovie._id)
        );
      })
      .catch(err => console.log(ERROR_MESSAGE_FOR_DELETE_MOVIES));
  }

  function handleHistoryGoBack() {
    if (loggedIn) {
      history.goBack();
    } else {
      history.push('')
    }
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
            onChangeShortMovies={handleShortMovies}
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
            onChangeShortMovies = {handleShortSavedMovies}
            savedMovies={savedMovies}
            savedAfterSeachMovies={savedAfterSeachMovies}
            onMovieDelete={handleMovieDelete}
            loading={loading}
            message={message}
          />
          <ProtectedRoute exact path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onOpenMenu={handleMenuClick}
            onUpdateUser={handleUpdateUserSubmit}
            isSuccess={isSuccess}
            isOpen={isInfoTooltipPopupOpen}
            onClose={closeAllPopups}
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
            {loggedIn ? <Redirect to={activePathPage} /> : <Redirect to="/signin" />}
          </Route>
          <Route path="/signup">
            <Register onRegister={handleRegister} />
            {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signup" />}
          </Route>
          <Route path="*">
            <Notfoundpage
              loggedIn={loggedIn}
              onHistory={handleHistoryGoBack} />
          </Route>
        </Switch>
        <Menu
          isOpen={isAddMenuPopupOpen}
          onClose={closeAllPopups}
        />
        <InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          isSuccess={isSuccess}
          message={message}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
