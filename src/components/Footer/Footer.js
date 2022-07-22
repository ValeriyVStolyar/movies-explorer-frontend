import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <footer className="footer section section_size_narrow section_size_medium page__footer">
      <div className="footer__upper">
        <p className="footer__description">учебный проект Яндекс.Практикум х BeatFilm.</p>
      </div>
      <div className="footer__content">
        <p className="footer__copyright">&copy; 2022</p>
        <nav className="navigation">
          <ul className="navigation__list-column navigation_gap-size_small footer__list">
            <li className="navigation__item">
              <a href="https://practicum.yandex.ru/" rel="noopener noreferrer"
                className="link navigation__list-link footer__list-link" target="_blank">Яндекс.Практикум</a>
            </li>
            <li className="navigation__item">
              <a href="https://valeriyvstolyar.github.io/movies-explorer-frontend/" rel="noopener noreferrer"
                className="link navigation__list-link footer__list-link" target="_blank">Github</a>
            </li>
            <li className="navigation__item">
              <a href="https://www.facebook.com/valeriy.stolyar" rel="noopener noreferrer"
                className="link navigation__list-link footer__list-link" target="_blank">Facebook</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
