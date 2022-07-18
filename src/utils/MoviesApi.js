import Main from "../components/Main/Main";


class MoviesApi {
  constructor({ address }) {
    this._address = address;
  }

  getMoviesInfo() {
    return fetch(`${this._address}`, {
      // credentials: 'include',
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': true,
      },
    })
      .then(this._checkResponse);
  }

  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
    }
    return res.json();
  }
}

const configMovies = {
  address: 'https://api.nomoreparties.co/beatfilm-movies/',
}

const apiMovies = new MoviesApi(configMovies);
export default apiMovies;
