import React from 'react';

import cl from './MoviesCard.module.css';
import bookmark from '../../../images/bookmark.svg'

import deleteIcon from '../../../images/deleteIcon.svg';
import savedBookmark from '../../../images/saved-bookmark.svg';
import {useLocation} from "react-router";

const MoviesCard = (props) => {

  const imageUrl = ` https://api.nomoreparties.co/${props.image}`

  const { pathname } = useLocation();

  let Icon = pathname !== '/saved-movies' ? bookmark : deleteIcon;

  if (props.isSaved) {
    Icon = savedBookmark;
  }

  return (
    <li className={cl.card}>
      <div className={cl.card__header}>
        <div>
          <h3 className={cl.card__title}>{props.title}</h3>

          //todo Проверить разное время, возможно переработать
          <p className={cl.card__time}>{`${Math.trunc(props.time / 60)}ч ${props.time % 60}мин`}</p>
        </div>
        <button className={cl.card__save}><img src={Icon} alt="bookmark"/></button>
      </div>

      <img className={cl.card__image} src={imageUrl} alt={props.desc}/>
    </li>
  );
};

export default MoviesCard;
