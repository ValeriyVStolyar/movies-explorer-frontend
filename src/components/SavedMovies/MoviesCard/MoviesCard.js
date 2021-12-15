import React from 'react';
import './MoviesCard.css';
import pathMovie from '../../../images/__movie.jpg';

function MoviesCard({
}) {

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
        <img src={pathMovie} alt="Фильм" class="saved-movies__photo" />
        <figcaption class="saved-movies__caption">Название фильма</figcaption>
        <p className="saved-movies__duration">1ч 17м</p>
      </figure>
    </li>
  );
}

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
