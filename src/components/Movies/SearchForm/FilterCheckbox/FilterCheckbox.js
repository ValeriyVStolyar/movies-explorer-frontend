import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({
}) {
  return (
    <label className="movies__tumb">
      <p className="movies__description-tumb">
        <input type="radio" className="movies__button-tumb"
          name="films" value="movies" checked />Короткометражки
      </p>
    </label>
  );
}

export default FilterCheckbox;
