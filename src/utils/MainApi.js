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

  addMovie(formData) {
    console.log('formData')
    console.log(formData)
    console.log(`${this._address}movies`)
    // console.log(`https://api.nomoreparties.co${formData.image.formats.thumbnail.url}`)
    return fetch(`${this._address}movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        // name: formData.name,
        // link: formData.link

        country: formData.country,
        description: formData.description,
        director: formData.director,
        duration: formData.duration,
        movieId: formData.id,
        thumbnail: `https://api.nomoreparties.co${formData.image.formats.thumbnail.url}`,
        // thumbnail: `https://api.nomoreparties.co${formData.image}`,
        image: `https://api.nomoreparties.co${formData.image.url}`,
        // image: `https://api.nomoreparties.co${formData.image}`,
        nameEN: formData.nameEN,
        nameRU: formData.nameRU,
        trailer: formData.trailerLink,
        year: formData.year,
      })
    })
      .then(this._checkResponse);
  }

  deleteMovie(cardId) {
    return fetch(`${this._address}movies/${cardId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
      },
    })
      .then(this._checkResponse)
  }

  // deleteCard(cardId) {
  //   return fetch(`${this._address}cards/${cardId}`, {
  //     method: 'DELETE',
  //     credentials: 'include',
  //     headers: {
  //     },
  //   })
  //     .then(this._checkResponse)
  // }

  // changeLikeCardStatus(cardId) {
  //   return fetch(`${this._address}cards/${cardId}/likes`, {
  //     method: 'PUT',
  //     credentials: 'include',
  //     headers: {
  //     },
  //   })
  //     .then(this._checkResponse);
  // }

  // deleteLikeCard(cardId) {
  //   return fetch(`${this._address}cards/${cardId}/likes`, {
  //     method: 'DELETE',
  //     credentials: 'include',
  //     headers: {
  //     },
  //   })
  //     .then(this._checkResponse);
  // }

  // setUserAvatar(formData) {
  //   return fetch(`${this._address}users/me/avatar`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     credentials: 'include',
  //     body: JSON.stringify({
  //       avatar: formData.avatar
  //     })
  //   })
  //     .then(this._checkResponse);
  // }

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
