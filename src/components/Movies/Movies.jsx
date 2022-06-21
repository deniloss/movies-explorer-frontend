import React from 'react';

import Navigation from "../Navigation/Navigation";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import useWindowWidth from "../../utils/windowWidth";


import cl from './Movies.module.css';
import Footer from "../Footer/Footer";

import {
  MOVIES_TO_FIRST_RENDER_12,
  MOVIES_TO_FIRST_RENDER_8,
  MOVIES_TO_FIRST_RENDER_5,
  MOVIES_TO_NEXT_RENDER_3,
  MOVIES_TO_NEXT_RENDER_2
} from '../../utils/constants';

const Movies = ({ allCards }) => {
  const { width } = useWindowWidth();

  const [initMovies, setInitMovies] = React.useState({current: 9, next: 0});

  React.useEffect(() => {
    resize();
  }, [width])

  const resize = () => {
    if(width >= 768) {
      setInitMovies({current: MOVIES_TO_FIRST_RENDER_12, next: MOVIES_TO_NEXT_RENDER_3})
    } else if (width >= 425) {
      setInitMovies({current: MOVIES_TO_FIRST_RENDER_8, next: MOVIES_TO_NEXT_RENDER_2})
    } else setInitMovies({current: MOVIES_TO_FIRST_RENDER_5, next: MOVIES_TO_NEXT_RENDER_2})
  }

  return (
    <section className={cl.movies}>
      <Navigation />
      <SearchForm />
      <MoviesCardList allCards={allCards} renderLimit={initMovies.current}  />
      <Footer />
    </section>
  );
};

export default Movies;
