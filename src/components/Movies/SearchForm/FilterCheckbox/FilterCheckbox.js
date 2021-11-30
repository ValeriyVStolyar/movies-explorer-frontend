import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({
}) {
  return (
    <label className="movies__filter">
      {/* <p className="movies__description-tumb">
        <input type="radio" className="movies__button-tumb"
          name="films" value="movies" checked />Короткометражки
      </p> */}
      <div className="movies__tumb">
        <div className="movies__tumb-small"></div>
      </div>
      <p className="description">Короткометражки</p>
    </label>
  );
}

export default FilterCheckbox;
