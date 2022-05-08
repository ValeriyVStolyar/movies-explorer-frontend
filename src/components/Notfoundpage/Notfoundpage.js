import React from 'react';
import './Notfoundpage.css';


function NotFoundPage({ onHistory }) {

  const handleGoBack = () => {
    onHistory();
  }


  return (
    <section className="notfoundpage section content__section">
      <h3 className="notfoundpage__title">404</h3>
      <p className="notfoundpage__subtitle">Страница не найдена</p>
      <button type="button"
      className="button notfoundpage__button"
      onClick={handleGoBack}
      aria-label="Назад">
        <p className="notfoundpage__text">Назад</p>
      </button>
    </section>
  );
}


export default NotFoundPage;
