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
import Menu from '../Movies/Menu/Menu';
import Logined from '../Header/Logined/Logined';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import api from '../../utils/MainApi';
import * as auth from '../../utils/auth';
import apiMovies from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import FilterCheckbox from '../Movies/SearchForm/FilterCheckbox/FilterCheckbox';


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const history = useHistory();
  const [isAddMenuPopupOpen, setIsAddMenuPopupOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  // const [shortMovies, setShortMovies] = useState([]);
  const [shortMoviesOn, setShortMoviesOn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [seachedSavedMovies, setSeachedSavedMovies] = useState([]);
  //  name: '', link: ''
  // country: '',
  // description: '',
  // director: '',
  // duration: '',
  // movieId: '',
  // thumbnail: '',
  // image: '',
  // nameEN: '',
  // nameRU: '',
  // trailer: '',
  // year: '',
  // });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  // const [loading, setLoading] = useState(true);


  console.log(currentUser)
  console.log(movies)
  // let locSt = localStorage.getItem('movies')
  // console.log(locSt)
  console.log(savedMovies)
  console.log(localStorage)
  console.log(shortMoviesOn)
  // console.log(shortMovies)
  // console.log(JSON.parse(lStorage))

  const handleRegister = (password, email, name) => {
    auth.register(password, email, name)
      .then((result) => {
        if (result) {
          console.log(result)
          setIsSuccess(true);
          // setIsInfoTooltipPopupOpen(true);
          history.push('/movies');
        }
      })
      .catch((err) => {
        console.log('Ошибка. Запрос на регистрацию не выполнен.')
        setIsSuccess(false);
        // setIsInfoTooltipPopupOpen(true);
      });
  }

  const checkToken = () => {
    auth.getContent()
      .then((res) => {
        console.log(res)
        setCurrentUser(res);
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => console.log('Ошибка. Запрос на проверку токена не выполнен.'));
  }

  const handleLogin = (password, email) => {
    auth.authorize(password, email)
      .then((res) => {
        console.log(res)
        setLoggedIn(true);
        history.push('/movies');
        checkToken();
      })
      .catch((err) => {
        console.log('Ошибка. Запрос на вход не выполнен.')
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
        console.log(result)
        setCurrentUser(result);
      })
      .catch(err => console.log('Ошибка. Запрос на получение инфо о пользователе не выполнен.'));
  }, [])

  const handleUpdateUserSubmit = (user) => {
    console.log(user)
    api.setUserInfo(user)
      .then((result) => {
        console.log(result)
        setCurrentUser(result);
        history.push('/movies');
        // closeAllPopups();
      })
      .catch(err => console.log('Ошибка. Запрос на обновление профиля не выполнен.'));
  }

  React.useEffect(() => {
    checkToken();
  }, [history]);

  function signOut() {
    setLoggedIn(false);
    setCurrentUser({});
    history.push('/');
    setEmail(false);
  }

  // useEffect(() => {
  //   apiMovies.getMoviesInfo()
  //     .then((result) => {
  //       console.log(result)
  //       setMovies(result);
  //       console.log(result);
  //     })
  //     .catch(err => console.log('Ошибка при получании фильмов'));
  // }, [])


  // const handleShortMovies = () => {
  //   setShortMoviesOn(true);
  // }

  const handleShortMovies = (boolMeaning) => {
    setShortMoviesOn(boolMeaning);
  }

  useEffect(() => {
    api.getMovies()
      .then((result) => {
        console.log(result)
        // setSavedMovies(result.data);
        setSavedMovies(checkShortMovies(result.data));
      })
      .catch(err => console.log('Ошибка при получании фильмов со своего api'));
  }, [shortMoviesOn])

  console.log(savedMovies)

  // useEffect(() => {
  //   let lStorage = localStorage.getItem('seachMovie')
  //   setMovies(JSON.parse(lStorage));
  //   // setMovies(handleShortMovies());
  // }, [])

  const checkShortMovies = (movies) => {
    console.log(movies)
    let shortMovies = movies.filter((item) => {
      // console.log(item)
      // console.log(item.duration)
      if (shortMoviesOn == true) {
        return item.duration <= 40;
        // } else {
      }
      if (shortMoviesOn == false) {
        return item.duration > 40;
      } else {
        console.log('Wau!');
      }
    })
    // console.log(lStorage)
    console.log(shortMovies)
    // setMovies(shortMovies)
    return shortMovies;
  }

  const handleSeachMovies = (seachKeyLetters) => {
    apiMovies.getMoviesInfo()
      .then((result) => {
        console.log(result)
        const seachMovies = result.filter((item) => {
          return item.nameRU.toLowerCase().includes(seachKeyLetters.toLowerCase());
        });
        console.log(seachMovies);
        if (seachMovies.length === 0) {
        //   console.log(seachMovie)
          setMessage('Ничего не найдено');
          console.log(message)
          setMovies([]);
        } else {
          console.log('else')
          // localStorage.setItem('seachMovie', JSON.stringify(seachMovies || []));
        }
        // checkShortMovies(seachMovies)
        setMovies(checkShortMovies(seachMovies))
        history.push('/movies');
      })
      .catch(err => console.log('Ошибка при получании фильмов'));
  }
  console.log(movies)

  const handleSeachSavedMovies = (seachKeyLetters) => {
    const seachMovies = savedMovies.filter((item) => {
          console.log(item);
          return item.nameRU.toLowerCase().includes(seachKeyLetters.toLowerCase());
        });
        if (seachMovies.length === 0) {
          //     console.log(seachMovie)
          setMessage('Ничего не найдено');
          console.log(message)
          setMovies([]);
          } else {
          console.log('else')
          setSavedMovies(seachMovies)
          console.log(seachMovies)
          //     setSeachedSavedMovies(seachMovie() || []);
          //     console.log('shortFilm()');
          //     // shortFilm();
          //     // resetMessage();
          }
  }


  // const handleSeachSavedMovies = (seachKeyLetters) => {
  //   const seachMovie = savedMovies.filter((item) => {
  //     console.log(item);
  //     return item.nameRU.toLowerCase().includes(seachKeyLetters.toLowerCase());
  //   });
  //   if (seachMovie.length === 0) {
  //     console.log(seachMovie)
  //     setMessage('Ничего не найдено');
  //     console.log(message)
  //     setMovies([]);
  //   } else {
  //     console.log('else')
  //     console.log(seachMovie())
  //     // localStorage.setItem('seachMovie', JSON.stringify(seachMovie || []));
  //     setSeachedSavedMovies(seachMovie() || []);
  //     console.log('shortFilm()');
  //     // shortFilm();
  //     // resetMessage();
  //   }
  //   console.log(seachMovie);
  //   history.push('/saved-movies');
  // }


  useEffect(() => {
    // shortFilm();
  }, [shortMoviesOn])

  const shortFilm = () => {
    let lStorage = localStorage.getItem('seachMovie')
    // console.log(lStorage)
    let shortMovie = JSON.parse(lStorage).filter((item) => {
      console.log(item)
      // console.log(item.duration)
      if (shortMoviesOn == true) {
        return item.duration <= 40
        // } else {
      }
      if (shortMoviesOn == false) {
        return item.duration > 40
      } else {
        console.log('Wau!')
      }
    })
    // console.log(lStorage)
    console.log(shortMovie)
    setMovies(shortMovie)
  }

  // const shortFilm = () => {
  //   let lStorage = localStorage.getItem('seachMovie')
  //   // setMovies(JSON.parse(lStorage));
  //   let shortMovie = JSON.parse(lStorage).filter((item) => {
  //     console.log(item.duration)
  //     // console.log(shortMovie)
  //     if (shortMoviesOn == true) {
  //       return item.duration <= 40
  //     // } else {
  //     } if (shortMoviesOn == false) {
  //       return item.duration > 40
  //     } else {
  //       console.log('wau!')
  //     }
  //   })
  // }

  // const handleShortMovies = () => {
  //   let lStorage = localStorage.getItem('seachMovie')
  //   // setMovies(JSON.parse(lStorage));
  //   let shortMovie = JSON.parse(lStorage).filter((item) => {
  //   console.log(item.duration)
  //   // console.log(shortMovie)
  //   if (shortMoviesOn == true) {
  //     return item.duration <= 40
  //   } else {
  //     return item.duration > 40
  //   }
  // })
  //   console.log(lStorage)
  //   console.log(shortMovie)
  //   setMovies(shortMovie)
  // }

  // const handleShortMovies = () => {
  //   let lStorage = localStorage.getItem('seachMovie')
  //   // setMovies(JSON.parse(lStorage));
  //   let shortMovie = JSON.parse(lStorage).filter((item) => {
  //   console.log(item.duration)
  //   // console.log(shortMovie)
  //   return item.duration <= 40
  //   })
  // }

  // handleShortMovies()
  // console.log(handleShortMovies())

  // const shortMovie = seachMovie.filter((item) => {
  //   console.log(item.duration)
  //   return item.duration <= 40
  // })
  // console.log(shortMovie)

  const handleSaveMovieSubmit = (newMovie) => {
    console.log(newMovie)
    api.addMovie(newMovie)

      .then((result) => {
        console.log(result)
        // setSavedMovie([result.data, ...savedMovie]);
        // setSavedMovies([result.data, ...movies]);
        setSavedMovies([result.data, ...savedMovies]);
        // setSavedMovies([result]);
        // localStorage.setItem("savedMovies", JSON.stringify(result.data || []));
        // localStorage.setItem("currentUser", JSON.stringify(result.data || []));
        // closeAllPopups();
        history.push('/movies');
      })
      .catch(err => console.log('Ошибка. Запрос на добавление фильма не выполнен.'));
  }

  function handleMovieDelete(savedMovie) {
    // console.log('savedMovie')
    // console.log(savedMovie)
    // const curentMovie = savedMovies.find((elem) => elem.movieId === localStorage.id)
    // console.log(curentMovie)
    // api.deleteMovie(movie._id)
    api.deleteMovie(savedMovie._id)
      .then(() => {
        setSavedMovies(savedMovies.filter(item =>
          item._id !== savedMovie._id)
        );
        // setSavedMovies(savedMovies.filter(item =>
        //   item.movieId !== localStorage.id)
        // )
      })

      .catch(err => console.log('Ошибка. Запрос на удаление карточки не выполнен.'));
  }
  // console.log(curentMovie)

  const handleTest = (ttt) => {
    console.log('test: checked')
    console.log(ttt)
    console.log(shortMoviesOn)
    setShortMoviesOn(ttt)
    // setShortMoviesOn(true)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page page__container">
        {/* <Header /> */}
        <Switch>
          <ProtectedRoute exact path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            onOpenMenu={handleMenuClick}
            onSeach={handleSeachMovies}
            movies={movies}
            onChangeShortMovies = {handleShortMovies}
            // shortMoviesOn = {handleShortMovies}
            savedMovies={savedMovies}
            onSaveMovie={handleSaveMovieSubmit}
            onMovieDelete={handleMovieDelete}
            loading={loading}
           />
           <ProtectedRoute exact path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            onOpenMenu={handleMenuClick}
            onSavedSeach={handleSeachSavedMovies}
            savedMovies={savedMovies}
            // seachedSavedMovies={seachedSavedMovies}
            onChangeShortMovies = {handleShortMovies}
            onMovieDelete={handleMovieDelete}
            // onSaveMovie={handleSaveMovieSubmit}
          />
          <ProtectedRoute exact path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onOpenMenu={handleMenuClick}
            onUpdateUser={handleUpdateUserSubmit}
            onSignOut={signOut}
          />
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>
          {/* <Route path="/movies-temporary">
            <MoviesWithMenu />
          </Route> */}
          {/* <Route exact path="/saved-movies-temporary">
            <SavedMoviesWithMenu />
          </Route> */}
          <Route path="/signin">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="/signup">
            <Register onRegister={handleRegister} />
          </Route>
          <Route path="/preloader">
            <Preloader />
          </Route>
          {/* <Route path="/menu">
            <Menu />
          </Route> */}
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
        {/* <Logined
          onOpenMenu={handleMenuClick}
        /> */}
        {/* <Footer /> */}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
