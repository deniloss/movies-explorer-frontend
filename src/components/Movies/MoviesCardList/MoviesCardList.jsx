import React from 'react';

import cl from './MoviesCardList.module.css';

import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router";

const MoviesCardList = ({
                          allCards,
                          renderLimit,
                          isSavedMovieList,
                          handleSaveMovie,
                          handleRemoveMovie,
                          moreButtonHandler
                        }) => {

  const {pathname} = useLocation();

  return (
    <section className={cl.CardList}>
      <ul className={cl.CardList__container}>
        {allCards.map((item, index, array) => {

          if (isSavedMovieList) {
            var savedThumb = item.thumbnail;
            var savedId = item._id;
          } else {
            var thumb = item.image.formats.thumbnail.url;
          }

          const limit = isSavedMovieList ? array.length : renderLimit
          return (
            index < limit &&
            <MoviesCard
              key={item.id || savedId}
              nameRU={item.nameRU}
              nameEN={item.nameEN}
              image={item.image.url}
              trailer={item.trailerLink}
              duration={item.duration}
              movieId={item.id}
              country={item.country}
              director={item.director}
              description={item.description}
              year={item.year}
              trailerLink={item.trailerLink}
              thumbnail={thumb || savedThumb}
              isSavedMovieList={isSavedMovieList}
              handleSaveMovie={handleSaveMovie}
              handleRemoveMovie={handleRemoveMovie}
            />)
        })}
      </ul>
      {pathname !== '/saved-movies' & renderLimit <= allCards.length
        ? (
          <button type='button' onClick={moreButtonHandler} className={cl.CardList__more}>Ещё</button>
        )
        : (
          ""
        )}

    </section>

  );
};

export default MoviesCardList;
