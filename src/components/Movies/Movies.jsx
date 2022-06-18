import React from 'react';

import Navigation from "../Navigation/Navigation";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";


import cl from './Movies.module.css';
import Footer from "../Footer/Footer";

const Movies = (props) => {
  return (
    <section className={cl.movies}>
      <Navigation />
      <SearchForm />
      <MoviesCardList  />
      <Footer />
    </section>
  );
};

export default Movies;
