import React from 'react';
import './AboutProject.css';

function AboutProject({
}) {
  return (
    <section name="project" className="project section section_size_narrow content__section" id="project">
      <div className="section__upper section_size_big-upper">
        <h2 className="section__title">о проекте</h2>
      </div>
      <article className="project-content">
        <h3 className="project-content__paragraph">дипломный проект включал 5 этапов</h3>
        <h3 className="project-content__paragraph project-content__duration">на выполнение диплома ушло 5 недель</h3>
        <p className="project-content__description">составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.</p>
        <p className="project-content__description">у каждого этапа был мягкий и жёсткий дедлайн, которые нужно
          было соблюдать, чтобы успешно защититься.</p>
      </article>
      <ul className="graphic">
        <li className="graphic__list">
          <p className="graphic__backend">1 неделя</p>
          <p className="graphic__description">Back-end</p>
        </li>
        <li className="graphic__list">
          <p className="graphic__frontend">4 недели</p>
          <p className="graphic__description">Front-end</p>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;
