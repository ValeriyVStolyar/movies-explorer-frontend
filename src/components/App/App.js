import React, { useEffect, useState } from 'react';
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
import Menu from '../Movies/Menu/Menu';
import Logined from '../Header/Logined/Logined';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import api from '../../utils/MainApi';
import * as auth from '../../utils/auth';
import apiMovies from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const history = useHistory();
  const [isAddMenuPopupOpen, setIsAddMenuPopupOpen] = useState(false);
  const [savedMovies, setSavedMovies] = useState({
  //  name: '', link: ''
        country: '',
        description: '',
        director: '',
        duration: '',
        movieId: '',
        thumbnail: '',
        image: '',
        nameEN: '',
        nameRU: '',
        trailer: '',
        year: '',
  });
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState('');

  console.log(currentUser)

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

  const handleSeachMovies = (movie) => {
    apiMovies.getMoviesInfo()
      .then((result) => {
        console.log(result)
        const seachMovie = result.filter((item) => {
          return item.nameRU.toLowerCase().includes(movie.toLowerCase());
        });
        console.log(seachMovie);
        if (seachMovie.length === 0) {
          console.log(seachMovie)
          setMessage('Ничего не найдено');
          console.log(message)
          setMovies([]);
        } else {
          setMovies(seachMovie);
          console.log(movie)
          console.log(seachMovie)

          // resetMessage();
        }
        history.push('/movies');
      })
      .catch(err => console.log('Ошибка при получании фильмов'));
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

  useEffect(() => {
    api.getMovies()
      .then((result) => {
        console.log(result)
        // setMovies(result.data);
      })
      .catch(err => console.log('Ошибка при получании фильмов со своего api'));
  }, [])

    const handleSaveMovieSubmit = (newMovie) => {
      console.log('newMovie')
      console.log(newMovie)
    api.addMovie(newMovie)
      .then((result) => {
        console.log(result)
        // setSavedMovie([result.data, ...savedMovie]);
        setSavedMovies([result.data, ...movies]);
        // closeAllPopups();
      })
      .catch(err => console.log('Ошибка. Запрос на добавление фильма не выполнен.'));
  }

  // const handleSaveMovieSubmit = (newMovie) => {
  //   api.addCard(newMovie)
  //     .then((result) => {
  //       console.log(result)
  //       setMovies([result.data, ...movies]);
  //       // closeAllPopups();
  //     })
  //     .catch(err => console.log('Ошибка. Запрос на добавление карточки не выполнен.'));
  // }

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
            onSaveMovie={handleSaveMovieSubmit}
          />
          <ProtectedRoute exact path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            onOpenMenu={handleMenuClick}
            onSeach={handleSeachMovies}
            movies={movies}
            savedMovies={savedMovies}
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


// import React, { useEffect, useState } from 'react';
// import { Redirect, Switch, Route, useHistory, withRouter } from "react-router-dom";
// import Header from './Header';
// import Main from './Main';
// import Footer from './Footer';
// import PopupWithForm from './PopupWithForm';
// import ImagePopup from './ImagePopup';
// import api from '../utils/api';
// import CurrentUserContext from '../contexts/CurrentUserContext';
// import EditProfilePopup from './EditProfilePopup';
// import EditAvatarPopup from './EditAvatarPopup';
// import AddPlacePopup from './AddPlacePopup';
// import ProtectedRoute from './ProtectedRoute';
// import Register from './Register';
// import Login from './Login';
// import InfoTooltip from './InfoTooltip';
// import * as auth from '../utils/auth';

// function App() {
//   const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
//   const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
//   const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
//   const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);
//   const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });
//   const [currentUser, setCurrentUser] = React.useState({});
//   const [cards, setCards] = React.useState([]);

//   const [loggedIn, setLoggedIn] = React.useState(false);
//   const [email, setEmail] = React.useState('');
//   const [isSuccess, setIsSuccess] = React.useState(false);

//   const history = useHistory();

//   const handleEditAvatarClick = () => {
//     setIsEditAvatarPopupOpen(true);
//   }

//   const handleEditProfileClick = () => {
//     setIsEditProfilePopupOpen(true);
//   }

//   const handleAddPlaceClick = () => {
//     setIsAddPlacePopupOpen(true);
//   }

//   const handleCardClick = (card) => {
//     setSelectedCard(card);
//   }

//   const closeAllPopups = () => {
//     setIsEditAvatarPopupOpen(false);
//     setIsEditProfilePopupOpen(false);
//     setIsAddPlacePopupOpen(false);
//     setIsInfoTooltipPopupOpen(false);
//     setSelectedCard({ name: '', link: '' });
//   }

//   const handleEscClose = (evt) => {
//     if (evt.key === 'Escape') {
//       closeAllPopups();
//     }
//   }

//   React.useEffect(() => {
//     document.addEventListener('keydown', handleEscClose);
//     return () => {
//       document.removeEventListener('keydown', handleEscClose);
//     }
//   })

//   useEffect(() => {
//     api.getUserInfo()
//       .then((result) => {
//         setCurrentUser(result.data);
//       })
//       .catch(err => console.log('Ошибка. Запрос на получение инфо о пользователе не выполнен.'));
//   }, [])

//   useEffect(() => {
//     api.getCards()
//       .then((result) => {
//         setCards(result.data);
//       })
//       .catch(err => console.log('Ошибка при получании карточек'));
//   }, [])

//   const handleUpdateUser = (user) => {
//     api.setUserInfo(user)
//       .then((result) => {
//         setCurrentUser(result.data);
//         closeAllPopups();
//       })
//       .catch(err => console.log('Ошибка. Запрос на обновление профиля не выполнен.'));
//   }

//   const handleUpdateAvatar = (user) => {
//     api.setUserAvatar(user)
//       .then((result) => {
//         setCurrentUser(result.data);
//         closeAllPopups();
//       })
//       .catch(err => console.log('Ошибка. Запрос на обновление профиля не выполнен.'));
//   }


//   function handleCardLike(card) {
//     const isLiked = card.likes.some((i) => {
//       return i === currentUser._id;
//     });

//     // Отправляем запрос в API и получаем обновлённые данные карточки
//     api.changeLikeCardStatus(card._id, !isLiked)
//       .then((newCard) => {
//         setCards((state) => {
//           return state.map((c) => {
//             return c._id === card._id ? newCard.data : c
//           })
//         });
//       })
//       .catch(err => console.log('Ошибка. Запрос на покраску лайка не выполнен.'));

//     api.deleteLikeCard(card._id, isLiked)
//       .then((newCard) => {
//         setCards((state) => state.map((c) => c._id === card._id ? newCard.data : c));
//       })
//       .catch(err => console.log('Ошибка. Запрос на уменьшение лайка не выполнен.'));
//   }

//   function handleCardDelete(card) {
//     api.deleteCard(card._id)
//       .then(() => {
//         setCards(cards.filter(item =>
//           item._id !== card._id)
//         )
//       })

//       .catch(err => console.log('Ошибка. Запрос на удаление карточки не выполнен.'));
//   }

//   const handleAddPlaceSubmit = (newCard) => {
//     api.addCard(newCard)
//       .then((result) => {
//         setCards([result.data, ...cards]);
//         closeAllPopups();
//       })
//       .catch(err => console.log('Ошибка. Запрос на добавление карточки не выполнен.'));
//   }

//   const checkToken = () => {
//     // const jwt = localStorage.getItem();
//     // const jwt = localStorage.getItem();
//     // if (jwt) {
//       auth.getContent()
//         .then((res) => {
//           setLoggedIn(true);
//           setEmail(res.data.email);
//           history.push('/');
//         })
//         .catch((err) => console.log('Ошибка. Запрос на проверку токена не выполнен.'));
//     // }
//   }

//   const handleLogin = (password, email) => {
//     auth.authorize(password, email)
//       .then((res) => {
//           setLoggedIn(true);
//           history.push('/');
//           checkToken();
//       })
//       .catch((err) => {
//         console.log('Ошибка. Запрос на вход не выполнен.')
//       });
//   }

//   const handleRegister = (password, email) => {
//     auth.register(password, email)
//       .then((result) => {
//         if (result) {
//           setIsSuccess(true);
//           setIsInfoTooltipPopupOpen(true);
//           history.push('/signin');
//         }
//       })
//       .catch((err) => {
//         console.log('Ошибка. Запрос на регистрацию не выполнен.')
//         setIsSuccess(false);
//         setIsInfoTooltipPopupOpen(true);
//       });
//   }

//   React.useEffect(() => {
//     checkToken();
//   }, [history]);

//   function signOut() {
//     setLoggedIn(false);
//     history.push('/signin');
//     setEmail(false);
//   }

//   return (
//     <CurrentUserContext.Provider value={currentUser}>
//       <div className="page">
//         <Header
//           email={email}
//           loggedIn={loggedIn}
//           onSignOut={signOut}
//         />
//         <Switch>
//           <ProtectedRoute exact path="/"
//             loggedIn={loggedIn}
//             component={Main}
//             onEditAvatar={handleEditAvatarClick}
//             onEditProfile={handleEditProfileClick}
//             onAddPlace={handleAddPlaceClick}
//             onCardClick={handleCardClick}
//             cards={cards}
//             onCardLike={handleCardLike}
//             onCardDelete={handleCardDelete}
//           />
//           <Route path="/signin">
//             <Login onLogin={handleLogin} />
//           </Route>
//           <Route path="/signup">
//             <Register onRegister={handleRegister} />
//           </Route>
//           <Route >
//             {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
//           </Route>
//         </Switch>
//         <Footer />
//         <PopupWithForm
//           name="submition"
//           title="вы уверены?"
//           save="да"
//         >
//         </PopupWithForm>
//         <EditProfilePopup
//           isOpen={isEditProfilePopupOpen}
//           onClose={closeAllPopups}
//           onUpdateUser={handleUpdateUser}
//         />
//         <EditAvatarPopup
//           isOpen={isEditAvatarPopupOpen}
//           onClose={closeAllPopups}
//           onUpdateAvatar={handleUpdateAvatar}
//         />
//         <ImagePopup
//           card={selectedCard}
//           onClose={closeAllPopups}
//         />
//         <AddPlacePopup
//           isOpen={isAddPlacePopupOpen}
//           onClose={closeAllPopups}
//           onAddPlace={handleAddPlaceSubmit}
//         />
//         <InfoTooltip
//           isOpen={isInfoTooltipPopupOpen}
//           onClose={closeAllPopups}
//           isSuccess={isSuccess}
//         />
//       </div>
//     </CurrentUserContext.Provider>
//   );
// }

// export default withRouter(App);
