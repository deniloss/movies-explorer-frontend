import React from 'react';

import Navigation from "../Navigation/Navigation";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

import cl from './SavedMovies.module.css';
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import isLoading from '../Preloader/Preloader';

const SavedMovies = ({allCards, initMovies}) => {

  return (
    <section className={cl.savedMovies}>
      <Navigation/>
      <SearchForm />
      {isLoading
        ?
        <Preloader />
        :
        <MoviesCardList
          allCards={allCards}
          renderLimit={initMovies.current}
        />
      }
      <Footer />
    </section>
  );
};

export default SavedMovies;
