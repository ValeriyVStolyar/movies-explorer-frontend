import React, {useEffect, useState} from 'react';
import './FilterCheckbox.css';


function FilterCheckbox(props) {
  let checkboxState = JSON.parse(localStorage.getItem('checkbox')) == '-on' ? '-on' : '-off';
  // const checkboxState = localStorage.getItem('checkbox') === '-on' ? '-on' : '-off';
  // const [checkbox, setCheckbox] = useState('-off');
  const [checkbox, setCheckbox] = useState(checkboxState);
  // const [checkbox, setCheckbox] = useState(checkboxState);

  console.log(checkboxState)
  console.log(checkbox)
  console.log(props.shortMoviesOn)
  console.log(props.shortSavedMoviesOn)

  // useEffect(() => {
    // checkboxState;
  // }, [checkboxState])

  // useEffect(() => {
  //   if(props.shortMoviesOn) {
  //     if(props.shortMoviesOn == true) {
  //       setCheckbox('-on');
  //     }
  //     else setCheckbox('-off');
  //   }
  // }, [props.shortMoviesOn])

  // useEffect(() => {
  //   if(props.shortSavedMoviesOn) {
  //     if(props.shortSavedMoviesOn == true) {
  //       setCheckbox('-on');
  //     }
  //     else setCheckbox('-off');
  //   }
  // }, [props.shortSavedMoviesOn])

  function handleChange() {
    if (checkbox == '-off') {
      // setCheckbox('-on');
      localStorage.setItem('checkbox', JSON.stringify('-on'));
      // console.log(localStorage.getItem('checkbox'))
      checkboxState = JSON.parse(localStorage.getItem('checkbox'))
      console.log(checkboxState)
      // setCheckbox(localStorage.getItem('checkbox'));
      setCheckbox(checkboxState);
      return props.onChangeShortMovies(true);
    } else {
      // setCheckbox('-off');
      localStorage.setItem('checkbox', JSON.stringify('-off'));
      checkboxState = JSON.parse(localStorage.getItem('checkbox'))
      console.log(checkboxState)
      // setCheckbox(localStorage.getItem('checkbox'));
      setCheckbox(checkboxState);
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
