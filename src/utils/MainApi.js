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
    // setUserInfo(name, email) {
    console.log('userData')
    console.log(userData)
    // console.log(name)
    return fetch(`${this._address}users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Access-Control-Request-Headers': true,
      },
      body: JSON.stringify({
        name: userData.data.name,
        email: userData.data.email
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

        // image: "https://api.nomoreparties.co/beatfilm-movies/uploads/thumbnail_all_tommoros_parties_33a125248d.jpeg",
        // "image": "https://api.nomoreparties.co/beatfilm-movies/uploads/thumbnail_all_tommoros_parties_33a125248d.jpeg",
        // image: '',
        // "thumbnail": "https://www.youtube.com/watch?v=D5fBhbEJxEU",
        // thumbnail: '',
        // thumbnail: "https://api.nomoreparties.co/beatfilm-movies/uploads/thumbnail_all_tommoros_parties_33a125248d.jpeg",

        // "nameRU": "All Tomorrow's Parties new",
        // "nameEN": "All Tomorrow's Parties",
        // "director": " Джонатан Кауэтт",
        // "country": "pppВеликобритания",
        // "year": "2009",
        // "duration": 82,
        // "description": "Хроники британского фестиваля, который первым нарушил монополию «Гластонбери», «Ридинга» и прочих пивных сборищ в чистом поле — и с тех пор прослыл одним из самых независимых и принципиальных. ATP из года в год проходит на базе отдыха в английской глуши, где артисты и их поклонники живут в одинаковых номерах, не бывает коммерческих спонсоров, программу составляют приглашенные кураторы (в разное время ими были Ник Кейв, Belle & Sebastian, Sonic Youth и даже Мэтт Грейнинг). И, главное, где не любят вздорных людей — основатель фестиваля Барри Хоган однажды сказал, что никогда больше не станет иметь дело с группой Killing Joke, «потому что они му...аки». Эта демократичность сказалась и на фильме: часть съемок сделана адептами фестиваля на мобильный телефон.",
        // "image": "https://api.nomoreparties.co/beatfilm-movies/uploads/thumbnail_all_tommoros_parties_33a125248d.jpeg",
        // "trailer": "https://www.youtube.com/watch?v=D5fBhbEJxEU",
        // "thumbnail": "https://www.youtube.com/watch?v=D5fBhbEJxEU",
        // "movieId": "5"
      })
    })
      .then(this._checkResponse);
  }

  // getUserInfo() {
  //   return fetch(`${this._address}users/me`, {
  //     credentials: 'include',
  //     headers: {
  //       Accept: "application/json",
  //       'Content-Type': 'application/json',
  //       'Access-Control-Request-Headers': true,
  //     },
  //   })
  //     .then(this._checkResponse);
  // }

  // getCards() {
  //   return fetch(`${this._address}cards`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     credentials: 'include',
  //   })
  //     .then(this._checkResponse);
  // }

  // setUserInfo(formData) {
  //   return fetch(`${this._address}users/me`, {
  //     method: 'PATCH',
  //     credentials: 'include',
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       'Access-Control-Request-Headers': true,
  //     },
  //     body: JSON.stringify({
  //       name: formData.name,
  //       about: formData.about
  //     })
  //   })
  //     .then(this._checkResponse);
  // }

  // addCard(formData) {
  //   return fetch(`${this._address}cards`, {
  //     method: 'POST',
  //     credentials: 'include',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       name: formData.name,
  //       link: formData.link
  //     })
  //   })
  //     .then(this._checkResponse);
  // }

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
