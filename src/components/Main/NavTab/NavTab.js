import React from 'react';
import './NavTab.css';
import { Link } from 'react-router-dom';

function NavTab({
}) {
  return (
    <section className="navigate section content__section">
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link href="#project" className="navigation__list-link navigate__link" target="_blank">О
            проекте</Link>
          </li>
          <li className="navigation__item">
            <Link href="#technology" className="navigation__list-link navigate__link" target="_blank">Технологии</Link>
          </li>
          <li className="navigation__item">
            <Link href="#student" className="navigation__list-link navigate__link" target="_blank">Студент</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
