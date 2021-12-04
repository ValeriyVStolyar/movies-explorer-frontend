import React from 'react';
import './NavTab.css';
import { Link } from 'react-router-dom';

function NavTab({
}) {
  return (
    <section className="navigate section content__section">
      <nav className="navigation">
        <ul className="navigation__list navigate__list navigation_gap-size_large navigation_decoration_active">
          <li className="navigation__item">
            <a href="#project" rel="noopener"
              className="link navigation__list-link navigate__link" target="_self">О
            проекте</a>
          </li>
          <li className="navigation__item">
            <a href="#technology" rel="noopener"
              className="link navigation__list-link navigate__link" target="_self">Технологии</a>
          </li>
          <li className="navigation__item">
            <a href="#student" rel="noopener"
              className="link navigation__list-link navigate__link" target="_self">Студент</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
