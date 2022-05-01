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
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedChosenMovies, setSavedChosenMovies] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);
  console.log(allMovies)
  console.log(movies)
  console.log(savedMovies)
  console.log(savedChosenMovies)


  const handleRegister = (password, email, name) => {
    auth.register(password, email, name)
      .then((result) => {
        if (result) {
          handleLogin();
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
    setSavedChosenMovies([]);
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
    localStorage.setItem('seach', JSON.stringify(seachKeyLetters));
    console.log(JSON.parse(localStorage.getItem('seach')));
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
      setMessage(ERROR_MESSAGE_FOR_UBSENT_MOVIE);
      setMovies([]);
    }
    else if (seachMovies.length != 0) {
      setLoading(false);
      localStorage.setItem('lsMovies', JSON.stringify((seachMovies) || []));
      setMessage('');
      const lookinkMovies = JSON.parse(localStorage.getItem('lsMovies'))
      const lengthMovies = checkShortMovies(lookinkMovies)
      console.log(lengthMovies)
      setMovies(lengthMovies);
    }
    else {
      setMessage(ERROR_MESSAGE_FOR_STUCKED_SERVER);
    }
  }


  // function checkLsSavedShortMovies() {
  //   if(JSON.parse(localStorage.getItem('boolMeaningSavedMovie'))) {
  //     console.log(JSON.parse(localStorage.getItem('boolMeaningSavedMovie')))
  //     return JSON.parse(localStorage.getItem('boolMeaningSavedMovie'));
  //   } else return false;
  // }

  // const boolMeaningMovie = localStorage.getItem('boolMeaningMovie') === true ? true : false;
  // console.log(boolMeaningMovie)
  // useEffect(() => {
  const handleShortMovies = (checkboxState) => {
    // setShortMoviesOn(boolMeaning);
    // localStorage.setItem('checkbox', JSON.stringify('-on'));
    localStorage.setItem('checkbox', JSON.stringify(checkboxState));
    // localStorage.setItem('boolMeaningMovie', JSON.stringify(boolMeaning));
    // setShortMoviesOn(JSON.parse(localStorage.getItem('boolMeaningMovie')));
  }
  // })

  const handleShortSavedMovies = (checkboxState) => {
    // setShortSavedMoviesOn(boolMeaning);
    localStorage.setItem('checkboxsaved', JSON.stringify(checkboxState));
    checkShortMovies(movies)
    console.log(movies)
    console.log('movies')
    // localStorage.setItem('boolMeaningSavedMovie', JSON.stringify(boolMeaning));
    // setShortSavedMoviesOn(JSON.parse(localStorage.getItem('boolMeaningSavedMovie')));
  }

  useEffect(() => {
    api.getMovies()
      .then((result) => {
        console.log(result)
        console.log(result.data)
        // console.log(savedMovies)
        // console.log(currentUser.user._id)
        // const personMovies = result.data
        // const personMovies = result.data.filter((item) => {
        //   return item.owner === currentUser.user._id;
        // })
        // console.log((personMovies));
        // setSavedMovies(checkShortMovies(result.data));
        setSavedMovies(result.data);
        // setSavedMovies(personMovies);
        // console.log(personMovies)
        // setSavedChosenMovies(checkShortMovies(savedMovies))
        // setSavedChosenMovies(result.data)
        // console.log(savedChosenMovies)
      })
      .catch(err => console.log(ERROR_MESSAGE_FOR_GET_SAVED_MOVIES));
  }, [])

  const checkShortMovies = (movies) => {
    console.log(movies)
    let shortMovies = movies.filter((item) => {
      // if ((shortMoviesOn == true) || (shortSavedMoviesOn == true) ) {
      // if ((shortMoviesOn == '-on') || (shortSavedMoviesOn == '-on') ) {
        // console.log(JSON.parse(localStorage.getItem('checkbox')))
        // console.log(JSON.parse(localStorage.getItem('checkboxsaved')))
      if ((JSON.parse(localStorage.getItem('checkbox')) == '-on') || (JSON.parse(localStorage.getItem('checkboxsaved')) == '-on') ) {
        return item.duration <= 40;
      }
      // if ((shortMoviesOn == false) || (shortSavedMoviesOn == false)) {
      // if ((shortMoviesOn == '-off') || (shortSavedMoviesOn == '-off')) {
        // console.log(JSON.parse(localStorage.getItem('checkbox')))
        // console.log(JSON.parse(localStorage.getItem('checkboxsaved')))
      if ((JSON.parse(localStorage.getItem('checkbox')) == '-off') || (JSON.parse(localStorage.getItem('checkboxsaved')) == '-off')) {
        return item.duration > 40;
      }
      if (JSON.parse(localStorage.getItem('checkbox')) === null) {
        return console.log('В LocalStorage еще нет информации о состоянии переклюателя checkbox')
      }
      else {
        setMessage(ERROR_MESSAGE_FOR_STUCKED_SERVER);
      }
    })
    return shortMovies;
  }

  const handleSeachSavedMovies = (seachKeyLetters) => {
    setLoading(true);
    // localStorage.setItem('seachsaved', JSON.stringify(seachKeyLetters)); // just info about last seach for me
    // console.log(JSON.parse(localStorage.getItem('seachsaved')));
    // const seachInputValue = JSON.parse(localStorage.getItem('seachsaved'));
    const seachMovies = savedMovies.filter((item) => {
      const nameRu = String(item.nameRU).toLowerCase();
      // return item.nameRU.toLowerCase().includes(seachKeyLetters.toLowerCase());
      // return nameRu.includes(seachInputValue.toLowerCase().trim());
      return nameRu.includes(seachKeyLetters.toLowerCase().trim());
    });
    console.log(seachMovies)
    const moviesForExposition = checkShortMovies(seachMovies)
    console.log(moviesForExposition)
    console.log(moviesForExposition.length)
    // if (seachMovies.length === 0) {
    if (moviesForExposition.length === 0) {
      setLoading(false);
      setMessage(ERROR_MESSAGE_FOR_UBSENT_MOVIE);
      setSavedMovies([]);
    }
    else if (seachMovies.length != 0) {
      setLoading(false);
      // const lengthMovies = checkShortMovies(seachMovies)
      // setSavedMovies(seachMovies);
      // setSavedMovies(lengthMovies);
      // setSavedMovies(seachMovies);
      // setSavedChosenMovies(seachMovies);
      // setSavedChosenMovies(lengthMovies);
      // setSavedChosenMovies(moviesForExposition);
      setSavedMovies(moviesForExposition);
      setMessage('');
    }
    else {
      setMessage(ERROR_MESSAGE_FOR_STUCKED_SERVER);
    }
    history.push('/saved-movies');
  }

  const handleSaveMovieSubmit = (newMovie) => {
  // const handleSaveMovieSubmit = (newMovie, savedState) => {
    // console.log(newMovie)
    // let ttt = ''
    // console.log(savedState)
    // localStorage.setItem('saved', JSON.stringify(savedState));
    api.addMovie(newMovie)
      .then((result) => {
        // console.log(result)
        // console.log(result.data)
        // console.log(result.data.movieId)
        // ttt = result.data.movieId
        // console.log(ttt)
        // const likedMovieId = ttt ? ttt._id : null;
        // const likedMovieId = ttt ? ttt.movieId : null;
        // console.log(ttt)
        setSavedMovies([result.data, ...savedMovies]);
        // localStorage.setItem('lsMovies', JSON.stringify((seachMovies) || []));
        // console.log(JSON.parse(localStorage.getItem('lsMovies')))
        // const ggg = JSON.parse(localStorage.getItem('lsMovies'))

        // const hhh = ggg.find((item) => {
        //   console.log(item)
        //   console.log(item.id)
        //   return item.id === ttt
          // return nameRu.includes(seachKeyLetters.toLowerCase().trim());
        // })
        // console.log(hhh)
        // const nnn = hhh.append({like: 'false'})
        // console.log(nnn)
        history.push('/movies');
      })
      .catch(err => console.log(ERROR_MESSAGE_FOR_ADDING_MOVIES));

    //   console.log(ttt)
    // // api.changeLikeMovieStatus(movieId)
    // api.changeLikeMovieStatus(ttt)
    //   console.log(ttt)
    //   .then((result) => {
    //     console.log(result)
    //   })
    //   .catch(err => console.log('ERROR_MESSAGE_FOR_ADDING_MOVIES'));
  }

  // ф-ия получения сохраненной карточки фильма
  // function getSavedMovieCard(arr, id) {
  //   return arr.find((item) => {
  //     return item.movieId === id;
  //   });
  // };

  // const handleMovieLike = (movieId) => {
  //   console.log(movieId)
  //   api.changeLikeMovieStatus(movieId)
  //     .then((result) => {
  //       setMovieState
  //     })
  // }




  // function handleCardLike(card) {
  //   const isLiked = card.likes.some((i) => {
  //     return i === currentUser._id;
  //   });

  //   // Отправляем запрос в API и получаем обновлённые данные карточки
  //   api.changeLikeCardStatus(card._id, !isLiked)
  //     .then((newCard) => {
  //       setCards((state) => {
  //         return state.map((c) => {
  //           return c._id === card._id ? newCard.data : c
  //         })
  //       });
  //     })
  //     .catch(err => console.log('Ошибка. Запрос на покраску лайка не выполнен.'));

  //   api.deleteLikeCard(card._id, isLiked)
  //     .then((newCard) => {
  //       setCards((state) => state.map((c) => c._id === card._id ? newCard.data : c));
  //     })
  //     .catch(err => console.log('Ошибка. Запрос на уменьшение лайка не выполнен.'));
  // }

  // function handleCardDelete(card) {
  //   api.deleteCard(card._id)
  //     .then(() => {
  //       setCards(cards.filter(item =>
  //         item._id !== card._id)
  //       )
  //     })

  //     .catch(err => console.log('Ошибка. Запрос на удаление карточки не выполнен.'));
  // }



  // function handleLikeMovieDelete(likedMovie) {
  //     console.log(likedMovie)
  //     api.deleteMovie(savedMovie._id)
  //       .then(() => {
  //         setSavedMovies(savedMovies.filter(item =>
  //           item._id !== savedMovie._id)
  //         );
  //       })
  //       .catch(err => console.log(ERROR_MESSAGE_FOR_DELETE_MOVIES));
  //   }






  function handleMovieDelete(savedMovie) {
  // function handleMovieDelete(savedMovie, savedState) {
    console.log(savedMovie)
    // console.log(savedState)
    // localStorage.setItem('saved', JSON.stringify(savedState));
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
            // shortMoviesOn={shortMoviesOn}
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
            // shortSavedMoviesOn={shortSavedMoviesOn}
            savedMovies={savedMovies}
            // savedMovies={savedChosenMovies}
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
