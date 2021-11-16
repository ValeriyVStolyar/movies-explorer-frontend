import React from 'react';
import './AboutMe.css';
import { Link } from 'react-router-dom';
import portpholioPhoto from '../../../images/__portpholio-my-photo.jpeg'

function AboutMe ({
})
{
  return (
    <section className="student section section_size_narrow content__section" id="student">
      <div className="section__upper student__section__header">
        <h2 className="section__title">студент</h2>
      </div>
      <article className="about-me student__about-me">
        <div className="my-favourite">
          <ul className="my-favourite__list">
            <li className="my-favourite__item">
              <p className="my-favourite__name">валерий</p>
            </li>
            <li className="my-favourite__item">
              <p className="my-favourite__job">фронтенд-разработчик, 52 года</p>
            </li>
            <li className="my-favourite__item">
              <p className="my-favourite__biography">родился и живу в Москве, закончил МГЮА по специальности юрист.
                Работаю адвокатом с 1994 года. Давно интересовался Веб-разработкой и начал кодить
                самостоятельно. Позже аписался на курс по веб-разработке. Было не очень просто, но, хоть и с
                двумя академами, все-таки вышел на диплом)</p>
            </li>
          </ul>
          <ul className="my-favourite__social-network-list">
            <li className="my-favourite__item">
              <Link to="" className="my-favourite__facebook">Facebook</Link>
            </li>
            <li className="my-favourite__item">
              <Link to="" className="my-favourite__github">Github</Link>
            </li>
          </ul>
        </div>
        <img src={portpholioPhoto} alt="Мое фото" className="my-favourite__photo" />
      </article>
    </section>

  );
}

export default AboutMe;
