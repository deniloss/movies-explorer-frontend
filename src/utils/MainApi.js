import getResponse from "./getResponse";
const filmUrl = 'https://api.nomoreparties.co/beatfilm-movies';
const baseUrl = 'https://movie-explorer-api.nomoreparties.sbs'

function getMovies() {
  return fetch(`${filmUrl}`, {
    method: 'GET'
  })
    .then(getResponse)

}

function saveMovie(movie) {
  return fetch(`${baseUrl}/movies`, {
    method: 'POST',
    body: JSON.stringify(movie)
  })
    .then(getResponse)
}

function removeMovie(movie) {
  return fetch(`${baseUrl}/movies/${movie}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then(getResponse)
}

function signUp({name, email, password}) {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({name, email, password})
  })
    .then(getResponse)
}

function logIn({email, password}) {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password})
  })
    .then(getResponse)
}

function logOut() {
  return fetch(`${baseUrl}/signout`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then(getResponse)
}

function getUser(jwt) {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`
    }
  })
    .then(getResponse)
}

export {
  getMovies,
  saveMovie,
  removeMovie,
  signUp,
  logOut,
  logIn,
  getUser
};
