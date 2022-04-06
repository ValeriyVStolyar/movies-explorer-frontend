// export const BASE_URL = 'https://api.vvs-movie.nomoredomains.rocks/';
export const BASE_URL = 'http://localhost:3000/';

export const validationSetting = ({
  formSelector: '.popup__validate',
  inputSelector: '.popup__input',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

const TRESHOLD_WIDTH_MAX = 1279;
const TRESHOLD_WIDTH_MEDIUM = 481;
const INCEPTION_MOVIES_QUANTITY_MAX = 12;
const INCEPTION_MOVIES_QUANTITY_MEDIUM = 8;
const INCEPTION_MOVIES_QUANTITY_MINIMUM = 5;
const EDDITIONAL_MOVIES_QUANTITY_MAXIMUM = 3;
const EDDITIONAL_MOVIES_QUANTITY_MINIMUM = 2;
const ERROR_MESSAGE_FOR_NOT_REGISTATION = 'Ошибка. Запрос на регистрацию не выполнен.';
const ERROR_MESSAGE_FOR_NOT_HAVE_TOKEN = 'Ошибка. Запрос на проверку токена не выполнен.';
const ERROR_MESSAGE_FOR_NOT_INTER = 'Ошибка. Запрос на вход не выполнен.';
const ERROR_MESSAGE_FOR_NOT_HAVE_USER = 'Ошибка. Запрос на получение инфо о пользователе не выполнен.';
const ERROR_MESSAGE_FOR_NOT_UPDATE_USER = 'Ошибка. Запрос на обновление профиля не выполнен.';
const ERROR_MESSAGE_FOR_GET_MOVIES = 'Ошибка при получании фильмов со стореннего api';
const ERROR_MESSAGE_FOR_GET_SAVED_MOVIES = 'Ошибка при получании фильмов со своего api';
const ERROR_MESSAGE_FOR_UBSENT_SEACH_LETTERS = 'Нужно ввести ключевое слово';
const ERROR_MESSAGE_FOR_UBSENT_MOVIE = 'ничего не найдено';
const ERROR_MESSAGE_FOR_STUCKED_SERVER = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
const ERROR_MESSAGE_FOR_ADDING_MOVIES = 'Ошибка. Запрос на добавление фильма не выполнен.';
const ERROR_MESSAGE_FOR_DELETE_MOVIES = 'Ошибка. Запрос на удаление карточки не выполнен.';

export {
  TRESHOLD_WIDTH_MAX,
  TRESHOLD_WIDTH_MEDIUM,
  INCEPTION_MOVIES_QUANTITY_MAX,
  INCEPTION_MOVIES_QUANTITY_MEDIUM,
  INCEPTION_MOVIES_QUANTITY_MINIMUM,
  ERROR_MESSAGE_FOR_UBSENT_MOVIE,
  ERROR_MESSAGE_FOR_UBSENT_SEACH_LETTERS,
  EDDITIONAL_MOVIES_QUANTITY_MAXIMUM,
  EDDITIONAL_MOVIES_QUANTITY_MINIMUM,
  ERROR_MESSAGE_FOR_NOT_REGISTATION,
  ERROR_MESSAGE_FOR_NOT_HAVE_TOKEN,
  ERROR_MESSAGE_FOR_NOT_INTER,
  ERROR_MESSAGE_FOR_NOT_HAVE_USER,
  ERROR_MESSAGE_FOR_NOT_UPDATE_USER,
  ERROR_MESSAGE_FOR_GET_MOVIES,
  ERROR_MESSAGE_FOR_GET_SAVED_MOVIES,
  ERROR_MESSAGE_FOR_STUCKED_SERVER,
  ERROR_MESSAGE_FOR_ADDING_MOVIES,
  ERROR_MESSAGE_FOR_DELETE_MOVIES,
};
