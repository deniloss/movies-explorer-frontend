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

import Preloader from "../Preloader/Preloader";

const Movies = ({
                  isSavedMovieList,
                  handleSaveMovie,
                  handleRemoveMovie,
                  savedMovies,
                  onFilter,
                  getFromLocalStorage,
                  setIntoLocalStorage,
                  onSearch,
                  isLoading,
                  allMovies
                }) => {
  const {width} = useWindowWidth();

  const [initMovies, setInitMovies] = React.useState({current: 9, next: 0});
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [foundMovies, setFoundMovies] = React.useState([])
  const [searchInput, setSearchInput] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [searchCompleted, setSearchCompleted] = React.useState(false);

  React.useEffect(() => {
    resize();
  }, [width]);

  const resize = () => {
    if (width >= 768) {
      setInitMovies({current: MOVIES_TO_FIRST_RENDER_12, next: MOVIES_TO_NEXT_RENDER_3})
    } else if (width >= 425) {
      setInitMovies({current: MOVIES_TO_FIRST_RENDER_8, next: MOVIES_TO_NEXT_RENDER_2})
    } else setInitMovies({current: MOVIES_TO_FIRST_RENDER_5, next: MOVIES_TO_NEXT_RENDER_2})
  }

  React.useEffect(() => {
    checkLastSearch();
    setChecked(JSON.parse(localStorage.getItem('checked')));
  }, [])

  React.useEffect(() => {
    localStorage.setItem('checked', JSON.stringify(checked));
    searchHandler();
  }, [checked, searchInput, searchCompleted]);

  React.useEffect(() => {
    filterHandler();
  }, [foundMovies])

  const checkLastSearch = () => {
    const lastSearch = localStorage.getItem('lastSearch');
    const lastChecked = localStorage.getItem('checked')
    if (lastSearch) {
      setSearchInput(getFromLocalStorage('lastSearch'));
      setChecked(JSON.parse(lastChecked));
      setSearchCompleted(true);
    } else {
      setSearchCompleted(false)
    }
  }

  const searchHandler = () => {
    if (searchInput.length > 0) {
      const localMovies = onSearch(allMovies, searchInput);
      setFoundMovies(localMovies);
      setIntoLocalStorage('lastSearch', searchInput);
      setSearchCompleted(true);
    }
  }

  const filterHandler = () => {
    setFilteredMovies(onFilter(foundMovies))
  }

  const moreButtonHandler = () => {
    setInitMovies({current: initMovies.current + initMovies.next, next: initMovies.next})
  }

  return (
    <section className={cl.movies}>
      <Navigation/>
      <SearchForm
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setChecked={setChecked}
        checked={checked}
        onSearch={searchHandler}
        isLoading={isLoading}
      />

      {isLoading
        ?
        <Preloader/>
        :
        <MoviesCardList
          allCards={checked ? filteredMovies : foundMovies}
          savedMovies={savedMovies}
          renderLimit={initMovies.current}
          isSavedMovieList={isSavedMovieList}
          handleSaveMovie={handleSaveMovie}
          handleRemoveMovie={handleRemoveMovie}
          moreButtonHandler={moreButtonHandler}
          searchCompleted={searchCompleted}
        />
      }
      <Footer/>
    </section>
  );
};

export default Movies;
