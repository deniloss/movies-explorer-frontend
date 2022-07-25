import getResponse from "./getResponse";
const filmUrl = 'https://movie-explorer-api.nomoreparties.sbs'


function getSavedMovies() {
  return fetch(`${filmUrl}/movies`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    },
  })
    .then(getResponse)

}

export {
  getSavedMovies
}
