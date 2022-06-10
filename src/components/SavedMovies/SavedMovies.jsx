import React from 'react';

import Navigation from "../Navigation/Navigation";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

import cl from './SavedMovies.module.css';
import Footer from "../Footer/Footer";

const SavedMovies = (props) => {
  return (
    <section className={cl.savedMovies}>
      <Navigation/>
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </section>
  );
};

export default SavedMovies;
