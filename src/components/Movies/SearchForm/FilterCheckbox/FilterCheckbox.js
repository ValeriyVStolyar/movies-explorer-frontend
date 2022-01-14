import React, {useState} from 'react';
import './FilterCheckbox.css';


function FilterCheckbox(
  props
) {
    const filterShortMoviesDom = React.useRef();
    const [checkbox, setCheckbox] = useState('-off');
    // console.log(filterShortMoviesDom)
    // console.log(filterShortMoviesDom.current)
    // console.log(filterShortMoviesDom.current.checked)

  function handleChange() {
    if (filterShortMoviesDom.current.checked) {
      setCheckbox('-on')
      return props.shortMoviesOn(true);
    } else {
      setCheckbox('-off');
      // console.log('notChecked')
      // return props.shortMoviesOn('notChecked');
      return props.shortMoviesOn(false);
    }
  }


  return (
    // <label for="checkbox" className="movies__filter">
    <div className="movies__filter">
      <p className="movies__description-tumb">
      {/* <label className="movies__checkbox" for="checkbox"> */}
      <label className={`movies__checkbox movies__checkbox${checkbox}`} for="checkbox">
            {/* <div className="movies__tumb-small"></div> */}
            <div className={`movies__tumb-small movies__tumb-small${checkbox}`}></div>
          </label>
        {/* <input type="checkbox" className="movies__button-tumb" */}
        <input type="checkbox" className="movies__tumb"
          // name="films" value="movies" checked
          name="films" value="movies" id="checkbox"
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
    </div>
  );
}

export default FilterCheckbox;
