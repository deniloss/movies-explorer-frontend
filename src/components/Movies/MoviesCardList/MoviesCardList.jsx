import React from 'react';

import cl from './MoviesCardList.module.css';

import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router";

const MoviesCardList = ({
                          allCards,
                          savedMovies,
                          renderLimit,
                          isSavedMovieList,
                          handleSaveMovie,
                          handleRemoveMovie,
                          moreButtonHandler,
                          searchCompleted
                        }) => {

  const {pathname} = useLocation();

  return (
    <section className={cl.CardList}>

      {searchCompleted && allCards.length < 1 ?
        <p className={cl.CardList__notFound}>Ничего не найдено</p>
        :
        ''}
      <ul className={cl.CardList__container}>

        {allCards.map((item, index, array) => {
          if (isSavedMovieList) {
            var savedThumb = item.thumbnail;
            var savedId = item._id;
            var image = item.image;
          } else {
            var thumb = item.thumbnail;
          }

          const limit = isSavedMovieList ? array.length : renderLimit
          return (
            index < limit &&
            <MoviesCard
              key={item._id || item.movieId}
              savedMovies={savedMovies}
              nameRU={item.nameRU}
              nameEN={item.nameEN}
              image={item.image || image}
              duration={item.duration}
              movieId={savedId || item.movieId}
              country={item.country}
              director={item.director}
              description={item.description}
              year={item.year}
              trailerLink={item.trailerLink || item.trailer}
              thumbnail={thumb || savedThumb}
              isSavedMovieList={isSavedMovieList}
              handleSaveMovie={handleSaveMovie}
              handleRemoveMovie={handleRemoveMovie}
            />)
        })}
      </ul>
      {pathname !== '/saved-movies' & renderLimit < allCards.length
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
