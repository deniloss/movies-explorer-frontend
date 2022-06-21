import React from 'react';

import cl from './MoviesCardList.module.css';

import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router";


const MoviesCardList = ({ allCards, renderLimit }) => {

  const { pathname } = useLocation();

  return (
    <section className={cl.CardList}>
      <ul className={cl.CardList__container}>
        {allCards.map((item, index) => {
          return (
            index < renderLimit &&
            <MoviesCard
            key={item.id}
            title={item.nameRU}
            image={item.image.url}
            trailer={item.trailerLink}
            time={item.duration}
            />)
        })}
      </ul>
      {pathname !== '/saved-movies' ? (
        <button className={cl.CardList__more}>Ещё</button>
      ) : (
        ""
      )}

    </section>

  );
};

export default MoviesCardList;
