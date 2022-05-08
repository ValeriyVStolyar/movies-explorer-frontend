export const BASE_URL = 'https://api.vvs-movie.nomoredomains.rocks/';
// export const BASE_URL = 'http://localhost:3000/';


const TRESHOLD_WIDTH_MAX = 1279;
const TRESHOLD_WIDTH_MEDIUM = 481;
const INCEPTION_MOVIES_QUANTITY_MAX = 12;
const INCEPTION_MOVIES_QUANTITY_MEDIUM = 8;
const INCEPTION_MOVIES_QUANTITY_MINIMUM = 5;
const EDDITIONAL_MOVIES_QUANTITY_MAXIMUM = 3;
const EDDITIONAL_MOVIES_QUANTITY_MINIMUM = 2;
const TOTAL_SEC_IN_A_MINUT = 60;
const ERROR_MESSAGE_FOR_NOT_REGISTATION = 'Ошибка. Запрос на регистрацию не выполнен.';
const ERROR_MESSAGE_FOR_NOT_HAVE_TOKEN = 'Ошибка. Запрос на проверку токена не выполнен.';
const ERROR_MESSAGE_FOR_NOT_INTER = 'Ошибка. Запрос на вход не выполнен.';
const ERROR_MESSAGE_FOR_NOT_HAVE_USER = 'Ошибка. Запрос на получение инфо о пользователе не выполнен.';
const ERROR_MESSAGE_FOR_NOT_UPDATE_USER = 'Ошибка. Запрос на обновление профиля не выполнен.';
const ERROR_MESSAGE_FOR_GET_MOVIES = 'Ошибка при получании фильмов со стореннего api';
const ERROR_MESSAGE_FOR_GET_SAVED_MOVIES = 'Ошибка при получании фильмов со своего api';
const ERROR_MESSAGE_FOR_UBSENT_SEACH_LETTERS = 'Нужно ввести ключевое слово';
const MESSAGE_FOR_UBSENT_MOVIE = 'ничего не найдено';
const ERROR_MESSAGE_FOR_STUCKED_SERVER = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
const ERROR_MESSAGE_FOR_ADDING_MOVIES = 'Ошибка. Запрос на добавление фильма не выполнен.';
const ERROR_MESSAGE_FOR_DELETE_MOVIES = 'Ошибка. Запрос на удаление карточки не выполнен.';
const ERROR_MESSAGE_FOR_NOT_LOGOUT = 'Ошибка. Запрос на разлонинирование пользователя не выполнен.';
const SUCCESS_AUTHORIZATION = 'Вы успешно авторизовались.';
const MESSAGE_FOR_NOT_OK = 'что-то пошло не так! Попробуйте ещё раз.';
const MESSAGE_FOR_CHANGE_NAME_OR_EMAIL = 'Если необходимо, то измените имя или email';
const MESSAGE_FOR_SACCESS_CHANGE_PROFILE_DATA = 'вы успешно изменили данные профиля!';


export {
  TRESHOLD_WIDTH_MAX,
  TRESHOLD_WIDTH_MEDIUM,
  INCEPTION_MOVIES_QUANTITY_MAX,
  INCEPTION_MOVIES_QUANTITY_MEDIUM,
  INCEPTION_MOVIES_QUANTITY_MINIMUM,
  TOTAL_SEC_IN_A_MINUT,
  MESSAGE_FOR_UBSENT_MOVIE,
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
  ERROR_MESSAGE_FOR_NOT_LOGOUT,
  SUCCESS_AUTHORIZATION,
  MESSAGE_FOR_NOT_OK,
  MESSAGE_FOR_CHANGE_NAME_OR_EMAIL,
  MESSAGE_FOR_SACCESS_CHANGE_PROFILE_DATA,
};
