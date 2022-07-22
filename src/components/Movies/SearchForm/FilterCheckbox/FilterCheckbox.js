import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import './FilterCheckbox.css';


function FilterCheckbox(props) {
  let checkboxMoviesState = JSON.parse(localStorage.getItem('checkbox')) === '-on' ? '-on' : '-off';
  let checkboxSavedMoviesState = JSON.parse(localStorage.getItem('checkboxsaved')) === '-on' ? '-on' : '-off';
  const { pathname } = useLocation();
  let checkboxState = pathname === '/movies' ? checkboxMoviesState : checkboxSavedMoviesState;
  let lSCheckbox = checkboxState === '-on' ? '-on' : '-off';
  const [checkbox, setCheckbox] = useState(lSCheckbox);

  function handleChange() {
    if (checkbox == '-off') {
      setCheckbox('-on');
      lSCheckbox = JSON.parse(localStorage.getItem(checkboxState));
      return props.onChangeShortMovies('-on');
    } else {
      setCheckbox('-off');
      lSCheckbox = JSON.parse(localStorage.getItem(checkboxState))
      return props.onChangeShortMovies('-off');
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
