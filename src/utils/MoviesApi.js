import getResponse from "./getResponse";
const filmUrl = 'https://movie-explorer-api.nomoreparties.sbs'


function getSavedMovies() {
  return fetch(`${filmUrl}`, {
    method: 'GET'
  })
    .then(getResponse)

}

export {
  getSavedMovies
}
