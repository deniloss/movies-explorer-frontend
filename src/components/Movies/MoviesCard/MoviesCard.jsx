import React from 'react';

import cl from './MoviesCard.module.css';

//todo Исправить механизм отображения сохраненных фильмов

const MoviesCard = ({
                      isSaved,
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

  const imageUrl = `https://api.nomoreparties.co/${image}`;
  const thumbnailUrl = `https://api.nomoreparties.co/${thumbnail}`
  const cardButtonClassName = (`${cl.card__save} ${isSavedMovieList ? cl.card__save_remove : isSaved ? cl.card__save_saved : ''}`);

  const handleClickIcon = () => {
    handleSaveMovie({ nameRU, country, duration, director, year, description, image: imageUrl, trailerLink, thumbnail: thumbnailUrl, movieId, nameEN })
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
            isSaved ? handleRemoveMovie(movieId) : handleClickIcon()
          }}
        ></button>
      </div>

      <img className={cl.card__image} src={imageUrl} alt='фото карточки'/>
    </li>
  );
};

export default MoviesCard;
