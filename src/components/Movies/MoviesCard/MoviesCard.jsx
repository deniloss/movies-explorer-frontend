import React from 'react';

import cl from './MoviesCard.module.css';

const MoviesCard = ({ isSaved, title, trailer, time, image, movieId, isSavedMovieList, handleSaveMovie, handleRemoveMovie }) => {

  const imageUrl = ` https://api.nomoreparties.co/${image}`


  const cardButtonClassName = (`${cl.card__save} ${isSavedMovieList ? cl.card__save_remove : isSaved ? cl.card__save_saved : ''}`)

  return (
    <li className={cl.card}>
      <div className={cl.card__header}>
        <div>
          <h3 className={cl.card__title}>{title}</h3>
          <p className={cl.card__time}>{`${Math.trunc(time / 60)}ч ${time % 60}мин`}</p>
        </div>
        <button
          className={cardButtonClassName}
          onClick={() => {
            isSaved ? handleRemoveMovie(movieId) : handleSaveMovie(movieId)
          }}
        ></button>
      </div>

      <img className={cl.card__image} src={imageUrl} alt='фото карточки'/>
    </li>
  );
};

export default MoviesCard;
