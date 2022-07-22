import React, { useState, useContext, useRef } from 'react';
import popupSaccess from '../../images/popup-union-success.svg';
import popupFail from '../../images/popup-union-fail.svg';
import {
  MESSAGE_FOR_SACCESS_CHANGE_PROFILE_DATA,
  MESSAGE_FOR_NOT_OK,
} from '../../utils/constants';
import './InfoTooltip.css';


function InfoTooltip({
  isOpen, onClose, isSuccess,
  message, isMessageChangeProfile, messageChangeProfile
}) {

  const succesText = `${
    isSuccess ? (message || MESSAGE_FOR_SACCESS_CHANGE_PROFILE_DATA) :
    (messageChangeProfile || MESSAGE_FOR_NOT_OK)
  }`;


  return (
    <section>
      <article className={`popup popup_type_success ${(isOpen || isMessageChangeProfile) && "popup_opened"}`}>
        <form action="#" method="POST" name="Input-list-places"
          className="popup__container-success popup__validate">
          {isSuccess ? (
            <img src={popupSaccess} alt="Успешная регистрация" className="popup__image-result" />)
            : (<img src={popupFail} alt="Неуспешная регистрация" className="popup__image-result" />)}
          <button type="button" aria-label="Закрыть попап"
            className="button button_type_close" onClick={onClose}></button>
          <h2 className="popup__title">{succesText}</h2>
        </form>
      </article>
    </section>
  )
}

export default InfoTooltip;
