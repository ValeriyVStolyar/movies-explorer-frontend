import Main from "../components/Main/Main";

class MainApi {
  constructor({ address }) {
    this._address = address;
  }

  getUserInfo() {
    return fetch(`${this._address}users/me`, {
      credentials: 'include',
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': true,
      },
    })
      .then(this._checkResponse);
  }

  setUserInfo(userData) {
    console.log(userData)
    return fetch(`${this._address}users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Access-Control-Request-Headers': true,
      },
      body: JSON.stringify({
        // name: userData.data.name,
        name: userData.name,
        // email: userData.data.email
        email: userData.email
      })
    })
      .then(this._checkResponse);
  }

  getMovies() {
    return fetch(`${this._address}movies`, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(this._checkResponse);
  }

  addMovie(newMovie) {
    console.log('newMovie')
    console.log(newMovie)
    console.log(`${this._address}movies`)
    // console.log(`https://api.nomoreparties.co${newMovie.image.formats.thumbnail.url}`)
    return fetch(`${this._address}movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        // name: newMovie.name,
        // link: newMovie.link

        country: newMovie.country,
        description: newMovie.description,
        director: newMovie.director,
        duration: newMovie.duration,
        movieId: newMovie.id,
        thumbnail: `https://api.nomoreparties.co${newMovie.image.formats.thumbnail.url}`,
        // thumbnail: `https://api.nomoreparties.co${newMovie.image}`,
        image: `https://api.nomoreparties.co${newMovie.image.url}`,
        // image: `https://api.nomoreparties.co${newMovie.image}`,
        nameEN: newMovie.nameEN,
        nameRU: newMovie.nameRU,
        trailer: newMovie.trailerLink,
        year: newMovie.year,
      })
    })
      .then(this._checkResponse);
  }

  deleteMovie(movieId) {
    console.log(movieId)
    return fetch(`${this._address}movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
      },
    })
      .then(this._checkResponse)
  }

  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
    }
    return res.json();
  }
}

const config = {
  // address: 'https://api.vvs-movie.nomoredomains.rocks/',
  address: 'http://localhost:3000/',
}

const api = new MainApi(config);
export default api;
