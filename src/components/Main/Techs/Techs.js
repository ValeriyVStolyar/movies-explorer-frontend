import React from 'react';
import './Techs.css';

function Techs({
}) {
  return (
    <section class="section section__add-color">
      <div class="technology  section_size_more-than-middle content__section" id="technology">
        <div class="section__upper section_size_small-upper">
          <h2 class="section__title">технологии</h2>
        </div>
        <article class="technology-content">
          <h3 class="technology-content__title">7 технологий</h3>
          <p class="technology-content__subtitle">на курсе веб-разработки мы освоили технологии, которые применили в дипломном
            проекте.</p>
          <ul class="technology-content__list">
            <li class="technology-content__item">
              <p class="technology-content__names">HTML</p>
            </li>
            <li class="technology-content__item">
              <p class="technology-content__names">CSS</p>
            </li>
            <li class="technology-content__item">
              <p class="technology-content__names">JS</p>
            </li>
            <li class="technology-content__item">
              <p class="technology-content__names">React</p>
            </li>
            <li class="technology-content__item">
              <p class="technology-content__names">Git</p>
            </li>
            <li class="technology-content__item">
              <p class="technology-content__names">Express.js</p>
            </li>
            <li class="technology-content__item">
              <p class="technology-content__names">mongoDB</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Techs;
