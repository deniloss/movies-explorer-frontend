import React from 'react';

import cl from './MoviesCard.module.css';

const MoviesCard = ({
                      savedMovies,
                      nameRU,
                      nameEN,
                      duration,
                      image,
                      movieId,
                      isSavedMovieList,
                      handleSaveMovie,
                      handleRemoveMovie,
                      country,
                      director,
                      year,
                      description,
                      trailerLink,
                      thumbnail
                    }) => {

  let imageUrl;
  let isSaved = false;
  let savedId;

  if (isSavedMovieList) {
    imageUrl = image;
  } else {
    isSaved = savedMovies.some((item) => {
      savedId = item._id;
      return item.movieId === movieId;
    })
    imageUrl = image;
  }

  const thumbnailUrl = `https://api.nomoreparties.co/${thumbnail}`
  const cardButtonClassName = (`${cl.card__save} ${isSavedMovieList ? cl.card__save_remove : isSaved ? cl.card__save_saved : ''}`);

  const handleDeleteCard = (movieId) => {
    handleRemoveMovie(movieId);
  }

  const handleClickIcon = () => {
    handleSaveMovie({
      nameRU,
      country,
      duration,
      director,
      year,
      description,
      image: imageUrl,
      trailerLink,
      thumbnail: thumbnailUrl,
      movieId,
      nameEN
    })
  }

  return (
    <li className={cl.card}>
      <div className={cl.card__header}>
        <div>
          <h3 className={cl.card__title}>{nameRU}</h3>
          <p className={cl.card__time}>{`${Math.trunc(duration / 60)}ч ${duration % 60}мин`}</p>
        </div>
        <button
          className={cardButtonClassName}
          onClick={() => {
            isSavedMovieList ? handleDeleteCard(movieId) : isSaved ? handleDeleteCard(savedId) : handleClickIcon()
          }}
        ></button>
      </div>

      <a href={trailerLink} target='_blank' className={cl.card__linkTrailer}>
        <img className={cl.card__image} src={imageUrl} alt='фото карточки'/>
      </a>

    </li>
  );
};

export default MoviesCard;
