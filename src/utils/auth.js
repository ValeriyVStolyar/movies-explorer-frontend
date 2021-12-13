// export const BASE_URL = 'https://api.vvs-movie.nomoredomains.rocks/';
export const BASE_URL = 'http://localhost:3000/';

export const register = (password, email, name) => {
  return fetch(`${BASE_URL}signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, email, name })
  })
    .then(checkResponse)
    .then((data) => {
      console.log(data)
      return data;
    })
};

export const authorize = (password, email) => {
  return fetch(`${BASE_URL}signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, email })
  })
    .then(checkResponse)
    .then((data) => {
      console.log(data)
      // сохраняем токен
      return data;
    })
};

export const getContent = () => {
  return fetch(`${BASE_URL}users/me`, {
    method: 'GET',
    credentials: 'include',
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': true,
    },
  })
    .then(checkResponse)
    .then((res) => {
      console.log(res)
      return res;
    })
};

function checkResponse(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
  }
  return res.json();
}