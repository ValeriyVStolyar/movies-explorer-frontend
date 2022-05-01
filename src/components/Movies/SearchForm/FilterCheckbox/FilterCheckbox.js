import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import './FilterCheckbox.css';


function FilterCheckbox(props) {
  let checkboxMoviesState = JSON.parse(localStorage.getItem('checkbox')) === '-on' ? '-on' : '-off';
  // let checkboxMoviesState = 'checkbox';
  let checkboxSavedMoviesState = JSON.parse(localStorage.getItem('checkboxsaved')) === '-on' ? '-on' : '-off';
  // let checkboxSavedMoviesState = 'checkboxsaved';
  // let checkboxSavedMoviesState = '-off';
  const { pathname } = useLocation();
  let checkboxState = pathname === '/movies' ? checkboxMoviesState : checkboxSavedMoviesState;
  // let lSCheckbox = JSON.parse(localStorage.getItem(checkboxState)) === '-on' ? '-on' : '-off';
  let lSCheckbox = checkboxState === '-on' ? '-on' : '-off';
  // const checkboxState = localStorage.getItem('checkbox') === '-on' ? '-on' : '-off';
  // const [checkbox, setCheckbox] = useState('-off');
  // const [checkbox, setCheckbox] = useState(checkboxState);
  const [checkbox, setCheckbox] = useState(lSCheckbox);
  // const [checkbox, setCheckbox] = useState(checkboxState);

  console.log(checkboxMoviesState)
  console.log(checkboxSavedMoviesState)
  console.log(checkboxState)
  console.log(lSCheckbox)
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
      setCheckbox('-on');
      // localStorage.setItem('checkbox', JSON.stringify('-on'));
      console.log(lSCheckbox)
      // localStorage.setItem(`${lSCheckbox}`, JSON.stringify('-on'));
      // console.log(localStorage.getItem('checkbox'))
      // checkboxState = JSON.parse(localStorage.getItem('checkbox'));
      lSCheckbox = JSON.parse(localStorage.getItem(checkboxState));
      // console.log(checkboxState)
      // setCheckbox(localStorage.getItem('checkbox'));
      console.log(lSCheckbox);
      // setCheckbox(`${lSCheckbox}`);
      // return props.onChangeShortMovies(true);
      // return props.onChangeShortMovies(true);
      return props.onChangeShortMovies('-on');
    } else {
      setCheckbox('-off');
      // localStorage.setItem('checkbox', JSON.stringify('-off'));
      // lSCheckbox = JSON.parse(localStorage.getItem('checkbox'))
      lSCheckbox = JSON.parse(localStorage.getItem(checkboxState))
      console.log(lSCheckbox)
      // setCheckbox(localStorage.getItem('checkbox'));
      // setCheckbox(lSCheckbox);
      // return props.onChangeShortMovies(false);
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
