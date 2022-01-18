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
const ERROR_MESSAGE_FOR_UBSENT_SEACH_LETTERS = 'Нужно ввести ключевое слово';
const ERROR_MESSAGE_FOR_UBSENT_MOVIE = 'Ничего не найдено';

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
};
