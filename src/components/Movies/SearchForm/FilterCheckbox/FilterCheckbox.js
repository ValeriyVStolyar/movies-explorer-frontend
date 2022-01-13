import React from 'react';
import './FilterCheckbox.css';


function FilterCheckbox(
  props
) {

    const filterShortMoviesDom = React.useRef();

    // console.log(filterShortMoviesDom)
    // console.log(filterShortMoviesDom.current)
    // console.log(filterShortMoviesDom.current.checked)

  function handleChange() {
    if (filterShortMoviesDom.current.checked) {
      return props.shortMoviesOn(true);
    } else {
      // console.log('notChecked')
      // return props.shortMoviesOn('notChecked');
      return props.shortMoviesOn(false);
    }
  }


  return (
    <label className="movies__filter">
      <p className="movies__description-tumb">
        <input type="checkbox" className="movies__button-tumb"
          // name="films" value="movies" checked
          name="films" value="movies"
          // onChange={handleChange}/>Короткометражки
          ref={filterShortMoviesDom}
          onChange={handleChange}
          />Короткометражки
          {/* onChange={(e) => handleChange(e)}/>Короткометражки */}
      </p>
      {/* <div className="movies__tumb">
        <div className="movies__tumb-small"></div>
      </div>
      <p className="description">Короткометражки</p> */}
      {/* <input type='button' className="movies__tumb"
      onClick={handleClick}>
        <div className="movies__tumb-small"></div>
      </input>
      <p className="description">Короткометражки</p> */}
    </label>
  );
}

export default FilterCheckbox;
