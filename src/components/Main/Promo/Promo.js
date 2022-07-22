import React from 'react';
import './Promo.css';
import pathLogoBanner from '../../../images/__logo-banner.svg'

function Promo({
}) {
  return (
    <section class="banner section content__section">
      <h1 class="banner__title">учебный проект студента факультета Веб-разработки.</h1>
      <div class="logo banner__logo">
        <img src={pathLogoBanner} alt="Логотип с изображением круга"
        class="banner__logo-main" />
      </div>
    </section>
  );
}

export default Promo;
