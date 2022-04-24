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
import InfoTooltip from '../InfoTooltip/InfoTooltip';
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
  const [shortMoviesOn, setShortMoviesOn] = useState(
    // checkLsShortMovies()
    false
  );
  const [shortSavedMoviesOn, setShortSavedMoviesOn] = useState(
    // checkLsSavedShortMovies()
    false
  );
  const [savedMovies, setSavedMovies] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);
  console.log(allMovies)
  console.log(movies)
  console.log(shortMoviesOn)
  console.log(shortSavedMoviesOn)
  console.log(savedMovies)



  const handleRegister = (password, email, name) => {
    auth.register(password, email, name)
      .then((result) => {
        if (result) {
          handleLogin();
          // history.push('/movies');
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
      })
      .catch((err) => console.log(ERROR_MESSAGE_FOR_NOT_HAVE_TOKEN));
  }

  const handleLogin = (password, email) => {
    auth.authorize(password, email)
      .then((result) => {
        checkToken();
        setIsSuccess(true);
        setIsInfoTooltipPopupOpen(true);
        setMessage(SUCCESS_AUTHORIZATION)
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
  // }, [history]);
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
        console.log(result)
        setAllMovies(result);
      })
      .catch(err => console.log(ERROR_MESSAGE_FOR_GET_MOVIES));
  }, [])

  const handleSeachMovies = (seachKeyLetters) => {
    setLoading(true)
    const seachMovies = allMovies.filter((item) => {
      return item.nameRU.toLowerCase().includes(seachKeyLetters.toLowerCase());
    });
    console.log(seachMovies)
    if (seachMovies.length === 0) {
      setLoading(false)
      setMessage(ERROR_MESSAGE_FOR_UBSENT_MOVIE);
      setMovies([]);
    }
    else if (seachMovies.length != 0) {
      setLoading(false);
      console.log(JSON.parse(localStorage.getItem('lsMovies')))
      // localStorage.setItem('lsMovies', JSON.stringify((checkShortMovies(seachMovies)) || []));
      localStorage.setItem('lsMovies', JSON.stringify((seachMovies) || []));
      console.log(JSON.parse(localStorage.getItem('lsMovies')))
      // console.log(handleShortMovies())
      setMessage('');
      const lookinkMovies = JSON.parse(localStorage.getItem('lsMovies'))
      console.log(lookinkMovies)
      // setMovies(JSON.parse(localStorage.getItem('lsMovies')));
      const lengthMovies = checkShortMovies(lookinkMovies)
      console.log(lengthMovies)
      // setMovies(checkShortMovies(lookinkMovies));
      setMovies(lengthMovies);
      console.log(movies)
    }
    else {
      setMessage(ERROR_MESSAGE_FOR_STUCKED_SERVER);
    }
  }

  // useEffect(() => {
  //   handleSeachMovies()
  // }, [shortMoviesOn])
  // }, [])

  function checkLsShortMovies() {
    // здесь какая-то фигня, не могу разобраться
    // if((JSON.parse(localStorage.getItem('boolMeaningMovie')) == true) || (JSON.parse(localStorage.getItem('boolMeaningMovie')) == true)) {
    //   console.log(JSON.parse(localStorage.getItem('boolMeaningMovie')))
    //   return JSON.parse(localStorage.getItem('boolMeaningMovie'));
    // } else return false;
  }

  function checkLsSavedShortMovies() {
    if(JSON.parse(localStorage.getItem('boolMeaningSavedMovie'))) {
      console.log(JSON.parse(localStorage.getItem('boolMeaningSavedMovie')))
      return JSON.parse(localStorage.getItem('boolMeaningSavedMovie'));
    } else return false;
  }

  const handleShortMovies = (boolMeaning) => {
    setShortMoviesOn(boolMeaning);
    // localStorage.setItem('boolMeaningMovie', JSON.stringify(boolMeaning));
    // setShortMoviesOn(JSON.parse(localStorage.getItem('boolMeaningMovie')));
  }

  const handleShortSavedMovies = (boolMeaning) => {
    setShortSavedMoviesOn(boolMeaning);
    // localStorage.setItem('boolMeaningSavedMovie', JSON.stringify(boolMeaning));
    // setShortSavedMoviesOn(JSON.parse(localStorage.getItem('boolMeaningSavedMovie')));
  }

  // const handleShortSavedMovies = (boolMeaning) => {
  //   localStorage.setItem('boolMeaningSavedMovie', JSON.stringify(boolMeaning));
  //   setShortSavedMoviesOn(JSON.parse(localStorage.getItem('boolMeaningSavedMovie')));
  //   console.log('JSON.parse(localStorage.getItem(boolMeaningSavedMovie))')
  //   console.log(JSON.parse(localStorage.getItem('boolMeaningSavedMovie')))
  //   console.log(localStorage.getItem('boolMeaningSavedMovie'))
  // }

  useEffect(() => {
    api.getMovies()
      .then((result) => {
        console.log(result)
        setSavedMovies(checkShortMovies(result.data));
      })
      .catch(err => console.log(ERROR_MESSAGE_FOR_GET_SAVED_MOVIES));
  }, [])

  const checkShortMovies = (movies) => {
    let shortMovies = movies.filter((item) => {
      if ((shortMoviesOn == true) || (shortSavedMoviesOn == true) ) {
        return item.duration <= 40;
      }
      if ((shortMoviesOn == false) || (shortSavedMoviesOn == false)) {
        return item.duration > 40;
      } else {
        setMessage(ERROR_MESSAGE_FOR_STUCKED_SERVER);
      }
    })
    return shortMovies;
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
      const lengthMovies = checkShortMovies(seachMovies)
      // setSavedMovies(seachMovies);
      setSavedMovies(lengthMovies);
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

  function handleHistoryGoBack() {
    if (loggedIn) {
      history.goBack();
    } else {
      history.push('')
    }
  }

  // function putOnShortMoviesButton() {
  //   if(onChangeShortMovies == true) {
  //     console.log('turnOn')
  //   }
  // }


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
            shortMoviesOn={shortMoviesOn}
            // turnOn={putOnShortMoviesButton}
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
            shortSavedMoviesOn={shortSavedMoviesOn}
            savedMovies={savedMovies}
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
            isSuccess
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
            {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signin" />}
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
