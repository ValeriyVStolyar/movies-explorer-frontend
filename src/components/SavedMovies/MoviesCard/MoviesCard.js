import React, { useEffect, useState } from 'react';
import './MoviesCard.css';
import pathMovie from '../../../images/__movie.jpg';

function MoviesCard(props) {

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  };

  console.log(props.savedMovie)
  console.log(props.savedMovie.image)

  // function handleClick() {
  //   props.onSaveMovie(props.movie);
  // }

  // const [savedMovies, setSavedMovies] = useState({
  //   //  name: '', link: ''
  //         country: '',
  //         description: '',
  //         director: '',
  //         duration: '',
  //         movieId: '',
  //         thumbnail: '',
  //         image: '',
  //         nameEN: '',
  //         nameRU: '',
  //         trailer: '',
  //         year: '',
  //   });

//   const [name, setPlace] = React.useState('');
//   const [link, setLink] = React.useState('');

//   function handleChangePlace(e) {
//     setPlace(e.target.value);
//   }

//   function handleChangeLink(e) {
//     setLink(e.target.value);
//   }

//   // После загрузки текущего пользователя из API
//   // его данные будут использованы в управляемых компонентах.
//   React.useEffect(() => {
//     setPlace('');
//     setLink('');
//   }, [isOpen]);

//   function handleSubmit(e) {
//     e.preventDefault();

//     // Передаём значения управляемых компонентов во внешний обработчик
//     onAddPlace({
//       name,
//       link,
//     });
//   }

  return (
    <li class="saved-movies__list-item">
      <button type="button" className="button saved-movies__button" aria-label="Сохранить">
        <div className="saved-movies__cross"></div>
      </button>
      <figure class="saved-movies__item">
        {/* <img src={`https://api.nomoreparties.co${props.savedMovie.image.url}`} */}
        <img src={`${props.savedMovie.image}`}
        alt={`Фильм ${props.savedMovie.nameRU}`} class="saved-movies__photo" />
        <figcaption class="saved-movies__caption">{props.savedMovie.nameRU}</figcaption>
        <p className="saved-movies__duration">{getTimeFromMins(props.savedMovie.duration)}</p>
      </figure>
    </li>
  );
}

  // return (
  //   <li class="movies__list-item">
  //     <button type="button" className="button movies__button"
  //       onClick={handleClick} aria-label="Сохранить">
  //       <p className="movies__text">Сохранить</p>
  //     </button>
  //     <a href={props.movie.trailerLink} rel="noopener" className="link movies__link">
  //       <figure class="movies__item">
  //         <img src={`https://api.nomoreparties.co${props.movie.image.url}`}
  //           alt={`Фильм ${props.movie.nameRU}`} class="movies__photo" />

  //         <figcaption class="movies__caption">{props.movie.nameRU}</figcaption>
  //         <p className="movies__duration">{getTimeFromMins(props.movie.duration)}</p>
  //       </figure>
  //     </a>
  //   </li>
  // );
// }

{/* <li class="movies__list-item">
<button type="button" className="button movies__button"
onClick={props.onSaveMovie} aria-label="Сохранить">
  <p className="movies__text">Сохранить</p>
</button>
<a href={props.movie.trailerLink} rel="noopener" className="link movies__link">
<figure class="movies__item">
    <img src={`https://api.nomoreparties.co${props.movie.image.url}`}
      alt={`Фильм ${props.movie.nameRU}`} class="movies__photo" />

  <figcaption class="movies__caption">{props.movie.nameRU}</figcaption>
  <p className="movies__duration">{getTimeFromMins(props.movie.duration)}</p>
</figure>
</a>
</li> */}

export default MoviesCard;

// function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
//   const [name, setPlace] = React.useState('');
//   const [link, setLink] = React.useState('');

//   function handleChangePlace(e) {
//     setPlace(e.target.value);
//   }

//   function handleChangeLink(e) {
//     setLink(e.target.value);
//   }

//   // После загрузки текущего пользователя из API
//   // его данные будут использованы в управляемых компонентах.
//   React.useEffect(() => {
//     setPlace('');
//     setLink('');
//   }, [isOpen]);

//   function handleSubmit(e) {
//     e.preventDefault();

//     // Передаём значения управляемых компонентов во внешний обработчик
//     onAddPlace({
//       name,
//       link,
//     });
//   }

//   return (
//     <PopupWithForm
//       name="places"
//       title="новое место"
//       isOpen={isOpen}
//       onClose={onClose}
//       save="Сохранить"
//       onSubmit={handleSubmit}
//     >
//       <input id="popup__place" type="text" name="place" placeholder="Название" value={name || ''}
//         className="popup__input popup__input_type_place" minLength="2" maxLength="30" required
//         onChange={handleChangePlace} />
//       <span className="popup__input-error popup__place-error"></span>
//       <input id="popup__link" type="url" name="link" placeholder="Ссылка на картинку" value={link || ''}
//         className="popup__input popup__input_type_link" required
//         onChange={handleChangeLink} />
//       <span className="popup__input-error popup__link-error"></span>
//     </PopupWithForm>
//   )
// }
