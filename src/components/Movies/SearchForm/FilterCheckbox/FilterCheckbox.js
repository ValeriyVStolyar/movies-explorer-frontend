import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import './FilterCheckbox.css';


function FilterCheckbox(
  props
) {
    const [checkbox, setCheckbox] = useState('-off');
    const { pathname } = useLocation();
    const seachMovie = pathname === '/movies' ? props.onChangeShortMovies : props.onChangeShortSavedMovies;

  function handleChange() {
    if (checkbox == '-off') {
      setCheckbox('-on')
      // return props.onChangeShortMovies(true);
      return seachMovie(true);
    } else {
      setCheckbox('-off');
      return seachMovie(false);
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
