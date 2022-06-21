const filmUrl = 'https://api.nomoreparties.co/beatfilm-movies';


function getMovies() {
  return fetch(`${filmUrl}`,
    {
      method: 'GET'
    })
    .then((res) => {
      return res.json();
    })
}


export {
  getMovies
};
