import React, {useEffect, useState} from 'react';
import './FilterCheckbox.css';


function FilterCheckbox(props) {
  const [checkbox, setCheckbox] = useState('-off');

  console.log(props.shortMoviesOn)
  console.log(props.shortSavedMoviesOn)

  useEffect(() => {
    if(props.shortMoviesOn) {
      if(props.shortMoviesOn == true) {
        setCheckbox('-on');
      }
      else setCheckbox('-off');
    }
  }, [props.shortMoviesOn])

  useEffect(() => {
    if(props.shortSavedMoviesOn) {
      if(props.shortSavedMoviesOn == true) {
        setCheckbox('-on');
      }
      else setCheckbox('-off');
    }
  }, [props.shortSavedMoviesOn])

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
