import React, {useState} from 'react';
import './FilterCheckbox.css';


function FilterCheckbox(
  props
) {
    const [checkbox, setCheckbox] = useState('-off');

  function handleChange() {
    if (checkbox == '-off') {
      setCheckbox('-on')
      return props.onChangeShortMovies(true);
    } else {
      setCheckbox('-off');
      return props.onChangeShortMovies(false);
    }
  }


  return (
    <div className="movies__filter">
      <p className="movies__description-tumb">
      <label className={`movies__checkbox movies__checkbox${checkbox}`} for="checkbox">
            <div className={`movies__tumb-small movies__tumb-small${checkbox}`}></div>
          </label>
        <input type="checkbox" className="movies__tumb"
          name="films" value="movies" id="checkbox"
          onClick={handleChange}
          />Короткометражки
      </p>
    </div>
  );
}

export default FilterCheckbox;
