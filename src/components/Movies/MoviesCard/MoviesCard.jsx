import React from 'react';

import cl from './MoviesCard.module.css';
import bookmark from '../../../images/bookmark.svg'

// todo После создания БД с фото удалить эту строчку
import image from '../../../images/movie-example.png';

const MoviesCard = (props) => {
  return (
    <li className={cl.card}>
      <div className={cl.card__header}>
        <div>
          <h3 className={cl.card__title}>{props.title}</h3>
          <p className={cl.card__time}>{props.time}</p>
        </div>
        <button className={cl.card__save}><img src={bookmark} alt="bookmark to save"/></button>
      </div>

      <img className={cl.card__image} src={image} alt={props.desc}/>
    </li>
  );
};

export default MoviesCard;
