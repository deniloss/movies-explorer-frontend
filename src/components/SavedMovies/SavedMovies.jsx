import React from 'react';

import Navigation from "../Navigation/Navigation";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

import cl from './SavedMovies.module.css';
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

import {getSavedMovies} from "../../utils/MoviesApi";
import useWindowWidth from "../../utils/windowWidth";
import {
  MOVIES_TO_FIRST_RENDER_12, MOVIES_TO_FIRST_RENDER_5,
  MOVIES_TO_FIRST_RENDER_8,
  MOVIES_TO_NEXT_RENDER_2,
  MOVIES_TO_NEXT_RENDER_3
} from "../../utils/constants";
import {useLocation} from "react-router";

const SavedMovies = ({ isSavedMovieList, handleRemoveMovie, setSavedMovies, savedMovies }) => {

  const {width} = useWindowWidth();
  const { pathname } = useLocation();

  const [inputValue, setSearchInput ] = React.useState('Введите ключевое слово');
  const [initMovies, setInitMovies] = React.useState({current: 9, next: 0});
  const [isLoading, setIsLoading] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  //todo Сделать исправный чекбокс на короткометражки

  React.useEffect(() => {
    resize();
  }, [width]);

  const handleChange = (evt) => {
    setSearchInput(evt.target.value)
  }

  const handleSearch = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    if (pathname === '/movies/saved') {
      getSavedMovies()
        .then((savedFilms) => {
          localStorage.setItem('savedMovieList', JSON.stringify(savedFilms));
          const films = JSON.parse(localStorage.savedMovieList);

          console.log(films)

          setSavedMovies(films);
        })
        .then(() => setIsLoading(false))
    }
  }

  const resize = () => {
    if(width >= 768) {
      setInitMovies({current: MOVIES_TO_FIRST_RENDER_12, next: MOVIES_TO_NEXT_RENDER_3})
    } else if (width >= 425) {
      setInitMovies({current: MOVIES_TO_FIRST_RENDER_8, next: MOVIES_TO_NEXT_RENDER_2})
    } else setInitMovies({current: MOVIES_TO_FIRST_RENDER_5, next: MOVIES_TO_NEXT_RENDER_2})
  }

  return (
    <section className={cl.savedMovies}>
      <Navigation/>
      <SearchForm
        onSubmit={handleSearch}
        setInput={handleChange}
        inputValue={inputValue}
        checked={checked}
      />
      {isLoading
        ?
        <Preloader />
        :
        <MoviesCardList
          allCards={savedMovies}
          renderLimit={initMovies.current}
          isSavedMovieList={isSavedMovieList}
          handleRemoveMovie={handleRemoveMovie}
        />
      }
      <Footer />
    </section>
  );
};

export default SavedMovies;
