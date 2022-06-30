import React from 'react';

import cl from './MoviesCardList.module.css';

import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router";

const MoviesCardList = ({ allCards, renderLimit, isSavedMovieList, handleSaveMovie, handleRemoveMovie, moreButtonHandler }) => {

  const { pathname } = useLocation();

  return (
    <section className={cl.CardList}>
      <ul className={cl.CardList__container}>
        {allCards.map((item, index, array) => {
          const limit = isSavedMovieList ? array.length : renderLimit
          return (
            index < limit &&
            <MoviesCard
            key={item.id}
            title={item.nameRU}
            image={item.image.url}
            trailer={item.trailerLink}
            time={item.duration}
            movieId={item.id}
            isSavedMovieList={isSavedMovieList}
            handleSaveMovie={handleSaveMovie}
            handleRemoveMovie={handleRemoveMovie}
            />)
        })}
      </ul>
      {pathname !== '/saved-movies' ? (
        <button type='button' onClick={moreButtonHandler} className={cl.CardList__more}>Ещё</button>
      ) : (
        ""
      )}

    </section>

  );
};

export default MoviesCardList;
