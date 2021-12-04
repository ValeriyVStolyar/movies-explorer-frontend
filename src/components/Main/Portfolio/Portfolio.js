import React from 'react';
import './Portfolio.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import pathArrow from '../../../images/__arrow-up-right.svg'

function Portfolio({
}) {
  return (
    <section className="perfomance section section_size_narrow content__section" id="student">
      <article className="portfolio">
        <h3 className="portfolio__title">портфолио</h3>
        <ul className="portfolio__paragraph-list">
          <li className="portfolio__paragraph-item">
            <a href="https://valeriyvstolyar.github.io/how-to-learn/" rel="noopener noreferrer"
            className="link portfolio__paragraph-link" target="_blank">
              <p className="portfolio__subtitle">статичный сайт</p>
              <img src={pathArrow} alt="Стрелка  направлена вправо и вверх"
                className="portfolio__list-link" />
            </a>
          </li>
          <li className="portfolio__paragraph-item">
            <a href="https://valeriyvstolyar.github.io/russian-travel/" rel="noopener noreferrer"
            className="link portfolio__paragraph-link" target="_blank">
              <p className="portfolio__subtitle"> адаптивный сайт</p>
              <img src={pathArrow} alt="Стрелка  направлена вправо и вверх"
                className="portfolio__list-link" />
            </a>
          </li>
          <li className="portfolio__paragraph-item">
            <a href="https://valeriyvstolyar.github.io/mesto/" rel="noopener noreferrer"
            className="link portfolio__paragraph-link" target="_blank">
              <p className="portfolio__subtitle">одностраничное приложение</p>
              <img src={pathArrow} alt="Стрелка  направлена вправо и вверх"
                className="portfolio__list-link" />
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Portfolio;
