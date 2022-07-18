import React from 'react';

import Navigation from "../Navigation/Navigation";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

import cl from './SavedMovies.module.css';
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import useWindowWidth from "../../utils/windowWidth";
import {
  MOVIES_TO_FIRST_RENDER_12, MOVIES_TO_FIRST_RENDER_5,
  MOVIES_TO_FIRST_RENDER_8,
  MOVIES_TO_NEXT_RENDER_2,
  MOVIES_TO_NEXT_RENDER_3
} from "../../utils/constants";

const SavedMovies = ({
                       isSavedMovieList,
                       handleRemoveMovie,
                       handleGetSavedMovies,
                       savedMovies,
                       onFilter,
                       isLoading
                     }) => {

  const {width} = useWindowWidth();

  React.useEffect(() => {
    resize();
  }, [width]);

  React.useEffect(() => {
    handleGetSavedMovies();
  }, [])

  React.useEffect(() => {
    setFoundMovies(savedMovies)
  }, [savedMovies])

  const [initMovies, setInitMovies] = React.useState({current: 9, next: 0});
  const [searchInput, setSearchInput] = React.useState('Введите ключевое слово');
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([])
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setFoundMovies(savedMovies)
  }, [])

  React.useEffect(() => {
    filterHandler();
  }, [checked, searchInput, handleRemoveMovie])

  const filterHandler = () => {
    setFilteredMovies(onFilter(foundMovies));
  }

  // const searchHandler = () => {
  //   setFoundMovies(onSearch(savedMovies, searchInput));
  // }

  const resize = () => {
    if (width >= 768) {
      setInitMovies({current: MOVIES_TO_FIRST_RENDER_12, next: MOVIES_TO_NEXT_RENDER_3})
    } else if (width >= 425) {
      setInitMovies({current: MOVIES_TO_FIRST_RENDER_8, next: MOVIES_TO_NEXT_RENDER_2})
    } else setInitMovies({current: MOVIES_TO_FIRST_RENDER_5, next: MOVIES_TO_NEXT_RENDER_2})
  }

  return (
    <section className={cl.savedMovies}>
      <Navigation/>
      <SearchForm
        setSearchInput={setSearchInput}
        checked={checked}
        setChecked={setChecked}
      />
      {isLoading
        ?
        <Preloader/>
        :
        <MoviesCardList
          allCards={checked ? filteredMovies : foundMovies}
          renderLimit={initMovies.current}
          isSavedMovieList={isSavedMovieList}
          handleRemoveMovie={handleRemoveMovie}
        />
      }
      <Footer/>
    </section>
  );
};

export default SavedMovies;
