import React from 'react';
import './MoviesCard.css';
import pathMovie from '../../../images/__movie.jpg';
import pathSign from '../../../images/__savedV.svg';

// function MoviesCard({ movie, onMovieClick, onMovieLike, onMovieDelete }) {
function MoviesCard(props) {

  // console.log(props)
  // console.log(props.movie)
  // console.log(props.movie._id)
  // console.log(props.movie.nameRU)
  // console.log(props.movie.nameRU)

  const moment = require('moment');
  let time = moment(moment.duration(props.movie.duration, 'minutes')).format('Hч. Mм.');

  return (
    <li class="movies__list-item">
      <button type="button" className="button movies__button" aria-label="Сохранить">
        <p className="movies__text">Сохранить</p>
      </button>
      <figure class="movies__item">
        {/* <img src={pathMovie} alt="Фильм" class="movies__photo" /> */}
        <img src={props.movie.image} alt="Фильм" class="movies__photo" />
        <figcaption class="movies__caption">{props.movie.nameRU}</figcaption>
        {/* <p className="movies__duration">1ч 17м</p> */}
  {/* <p className="movies__duration">{`${props.movie.duration/60}ч`}</p> */}
  <p className="movies__duration">{time}</p>
      </figure>
    </li>
  );
}

export default MoviesCard;


// function Card({ card, onCardClick, onCardLike, onCardDelete }) {

//   const currentUser = useContext(CurrentUserContext);

//   // Определяем, являемся ли мы владельцем текущей карточки
//   const isOwn = card.owner === currentUser._id;

//   // Создаём переменную, которую после зададим в `className` для кнопки удаления
//   const cardDeleteButtonClassName = (
//     `button button_type_remove ${isOwn ? 'button_type_remove' : 'button_disabled'}`
//   );

//   // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
//   const isLiked = card.likes.some(i => i === currentUser._id);

//   // Создаём переменную, которую после зададим в `className` для кнопки лайка
//   const cardLikeButtonClassName = (
//     `button button_type_like ${isLiked ? 'button_clicked' : ''}`
//   );

//   function handleClick() {
//     onCardClick(card);
//   }

//   function handleLikeClick() {
//     onCardLike(card);
//   }

//   function handleDeleteClick() {
//     onCardDelete(card);
//   }

//   return (
//     <article className="place">
//       <button type="button" aria-label="Удалить"
//         className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
//       <img src={card.link} alt={`Картинка места с названием
//       ${card.name}`} className="place__image" onClick={handleClick} />
//       <div className="place__list-sights">
//         <h2 className="place__title">{card.name}</h2>
//         <div className="place__like-conteiner">
//           <button type="button" aria-label="Лайкнуть"
//             className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
//           <p className="place__text">{card.likes.length}</p>
//         </div>
//       </div>
//     </article>
//   );
// }


// function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick,
//   cards, onCardLike, onCardDelete }) {

//   const currentUser = useContext(CurrentUserContext);

//   return (
//     <main className="content">
//       <section className="profile">
//         <div className="profile__block">
//           <img src={currentUser.avatar} alt="Аватар" className="profile__image" />
//           <button type="button" aria-label="Открыть попап редактирования аватара"
//             className="button button_type_edit-avatar" onClick={onEditAvatar}></button>
//         </div>
//         <div className="profile__info">
//           <h1 className="profile__title">{currentUser.name}</h1>
//           <button type="button" aria-label="Открыть попап"
//             className="button button_type_edit" onClick={onEditProfile}>
//           </button>
//           <p className="profile__subtitle">{currentUser.about}</p>
//         </div>
//         <button type="button" aria-label="Добавить карточку"
//           className="button button_type_add-card" onClick={onAddPlace}>
//         </button>
//       </section>
//       <section aria-label="Фотографии мест" className="places">
//         {cards.map(card => (
//           <Card
//             card={card}
//             onCardClick={onCardClick}
//             onCardLike={onCardLike}
//             onCardDelete={onCardDelete}
//             key={card._id}
//           />
//         )
//         )}
//       </section>
//     </main>
//   );
// }




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
