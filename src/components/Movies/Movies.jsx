import React from 'react';

import Navigation from "../Navigation/Navigation";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import useWindowWidth from "../../utils/windowWidth";

import {getMovies} from "../../utils/MainApi";


import cl from './Movies.module.css';
import Footer from "../Footer/Footer";

import {
  MOVIES_TO_FIRST_RENDER_12,
  MOVIES_TO_FIRST_RENDER_8,
  MOVIES_TO_FIRST_RENDER_5,
  MOVIES_TO_NEXT_RENDER_3,
  MOVIES_TO_NEXT_RENDER_2
} from '../../utils/constants';

import Preloader from "../Preloader/Preloader";
import {useLocation} from "react-router";

const Movies = ({isSavedMovieList, handleSaveMovie, handleRemoveMovie}) => {
  const {width} = useWindowWidth();
  const {pathname} = useLocation();

  const [initMovies, setInitMovies] = React.useState({current: 9, next: 0});
  const [inputValue, setSearchInput] = React.useState('Введите ключевое слово');
  const [allCards, setAllCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    resize();
  }, [width])

  const handleChange = (evt) => {
    setSearchInput(evt.target.value)
  }

  const resize = () => {
    if (width >= 768) {
      setInitMovies({current: MOVIES_TO_FIRST_RENDER_12, next: MOVIES_TO_NEXT_RENDER_3})
    } else if (width >= 425) {
      setInitMovies({current: MOVIES_TO_FIRST_RENDER_8, next: MOVIES_TO_NEXT_RENDER_2})
    } else setInitMovies({current: MOVIES_TO_FIRST_RENDER_5, next: MOVIES_TO_NEXT_RENDER_2})
  }

  const handleCheckBox = () => {
    setChecked(!checked);

    if (checked === false) {
      const shortFilms = allCards.filter(movie => movie.duration <= 40);

      setAllCards(() => {
        localStorage.setItem('shortFilms', shortFilms)
        return shortFilms;
      })
    } else if(checked === true) {
      setAllCards(JSON.parse(localStorage.foundFilms))
    }
  }

  const filterFilms = (allCards) => {
    const films = allCards.filter((movie) =>
      movie.nameRU.toLowerCase().includes(inputValue)
    );
    setAllCards(() => {
      localStorage.setItem('foundFilms', JSON.stringify(films));
      return films;
    })
  }

  const handleSearch = (evt) => {
    evt.preventDefault();
    if (pathname === '/movies') {
      setIsLoading(true);
      getMovies()
        .then((list) => {
          localStorage.setItem('moviesList', JSON.stringify(list));
          filterFilms(JSON.parse(localStorage.moviesList))
        })
        .then(() => setIsLoading(false))
    }
  }

  const moreButtonHandler = () => {
    setInitMovies({current: initMovies.current + initMovies.next, next: initMovies.next})
  }


  return (
    <section className={cl.movies}>
      <Navigation/>
      <SearchForm
        onSubmit={handleSearch}
        setInput={handleChange}
        inputValue={inputValue}
        setChecked={handleCheckBox}
        checked={checked}
      />

      {isLoading
        ?
        <Preloader/>
        :
        <MoviesCardList
          allCards={allCards}
          renderLimit={initMovies.current}
          isSavedMovieList={isSavedMovieList}
          handleSaveMovie={handleSaveMovie}
          handleRemoveMovie={handleRemoveMovie}
          moreButtonHandler={moreButtonHandler}
        />
      }
      <Footer/>
    </section>
  );
};

export default Movies;
