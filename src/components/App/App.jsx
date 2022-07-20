import './App.css';
import React from 'react';
import {Routes, Route, useNavigate, useLocation} from "react-router";

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ProtectedRoutes from "../ProtectedRoute/ProtectedRoutes";

import {CurrentUserContext} from "../../context/currentUserContext";

import NotFound from "../NotFound/NotFound";
import {saveMovie, removeMovie, signUp, logIn, getUser, updateUser, getMovies} from "../../utils/MainApi";
import {getSavedMovies} from "../../utils/MoviesApi";
import {apiUrl} from "../../utils/constants";


function App() {

  let location = useLocation().pathname
  let navigate = useNavigate();

  const [savedMovies, setSavedMovies] = React.useState([]);
  const [allMovies, setAllMovies] = React.useState([])
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [ errorMessage, setErrorMessage ] = React.useState('');
  const [ globalError, setGlobalError ] = React.useState(false);
  const [ successMessage, setSuccessMessage ] = React.useState('');

  React.useEffect(() => {
    handleGetUser();
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      checkLocalStorage();
      handleGetSavedMovies();
    }
  }, [loggedIn])

  const checkLocalStorage = () => {
    const localAllMovies = localStorage.getItem('allMovies');
    if (localAllMovies) {
      setAllMovies(JSON.parse(localAllMovies));
    } else handleGetAllMovies();
  }

  // ****************** Работа с пользователем

  const handleRegister = ({email, name, password}) => {
    setIsLoading(true);
    signUp({email, name, password})
      .then(() => {
        handleLogin({email, password})
      })
      .catch(() => setErrorMessage('Такой e-mail уже зарегистрирован'))
      .finally(() => setIsLoading(false))
  }

  const handleLogin = ({email, password}) => {
    setIsLoading(true);
    logIn({email, password})
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem('jwt', data.jwt);
          setLoggedIn(true);
          handleGetUser();
          navigate('/movies', {replace: true})
        }
      })
      .catch((err) => setErrorMessage(err.message))
      .finally(() => setIsLoading(false))
  }

  const handleGetUser = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      getUser()
        .then((data) => {
          if (data) {
            setLoggedIn(true);
            setCurrentUser(data);
            navigate(location, {replace: true})
          }
        })
        .catch((err) => handleErrors(err))
    } else setLoggedIn(false);
  }

  const handleUpdateUser = (name, email) => {
    setIsLoading(true);
    updateUser(name, email)
      .then((data) => {
        if (data) {
          setCurrentUser(data);
        }
      })
      .catch((err) => {
        setErrorMessage(err.message);
        handleErrors(err);
      })
      .finally(() => setIsLoading(false))
  }

  const handleLogOut = () => {
    setLoggedIn(false);
    clearData();
  }

  const clearData = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('lastSearch');
    localStorage.removeItem('allMovies');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('checked')
    setErrorMessage('')
    setSuccessMessage('');
  }


  // ****************** Работа с фильмами

const handleGetAllMovies = () => {
    getMovies()
      .then((data) => {
        const movies = data.map((item) => {
          const imageUrl = item.image && item.image.url;
          const thumbnailUrl = item.thumbnail && item.image.formats.thumbnail.url;
          return {
            nameRU : item.nameRU || 'UNKNOWN',
            nameEN : item.nameEN || 'UNKNOWN',
            movieId : item.id || -1,
            country : item.country || 'UNKNOWN',
            director : item.director || 'UNKNOWN',
            duration : item.duration || -1,
            year : item.year || 'UNKNOWN',
            description : item.description || 'UNKNOWN',
            image: imageUrl ? apiUrl + imageUrl : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png',
            trailerLink: item.trailerLink ? item.trailerLink : 'https://youtu.be/404',
            thumbnail: thumbnailUrl ? apiUrl + thumbnailUrl : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png',
          }
        });
        localStorage.setItem('allMovies', JSON.stringify(movies));
        setAllMovies(movies)
      })
      .catch(() => {
        setGlobalError(true);
      })
}

const handleGetSavedMovies = () => {
    setIsLoading(true);
    getSavedMovies()
      .then((movies) => {
        localStorage.setItem('savedMovies', JSON.stringify(movies))
        setSavedMovies(movies);
      })
      .catch((err) => {
        setGlobalError(true);
        handleErrors(err);
      })
      .finally(() => {
        setIsLoading(false)
      })
}

  const handleSaveMovie = (movie) => {
    saveMovie(movie)
      .then((movie) => {
        setSavedMovies([movie, ...savedMovies]);
      })
      .catch((err) => {
        setGlobalError(err);
        handleErrors(err);
      })
  }

  const handleRemoveMovie = (id) => {
    removeMovie(id)
      .then(() => {
        const newSavedMovies = savedMovies.filter(item => item._id !== id);
        setSavedMovies(newSavedMovies);
      })
      .catch((err) => {
        setGlobalError(err);
        handleErrors(err);
      })

  }

  const handleSearch = (moviesList, searchInput) => {
    return moviesList.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(searchInput);
    });
  }

  const filterByDuration = (moviesList) => {
    return moviesList.filter((movie) => {
      return movie.duration <= 40;
    });
  }

  // ****************** Работа с localStorage

  const setIntoLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
  }

  const handleErrors = (err) => {
    if (err.status === 401) {
      setLoggedIn(false);
      clearData();
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <section className="App">
        <Routes>

          <Route
            path='/'
            element={<Main loggedIn={loggedIn}/>}
          />


          <Route path='/movies' element={<ProtectedRoutes loggedIn={loggedIn}/>}>
            <Route
              exact
              path="/movies"
              element={<Movies
                allMovies={allMovies}
                isSavedMovieList={false}
                handleSaveMovie={handleSaveMovie}
                handleRemoveMovie={handleRemoveMovie}
                onFilter={filterByDuration}
                onSearch={handleSearch}
                savedMovies={savedMovies}
                setIntoLocalStorage={setIntoLocalStorage}
                getFromLocalStorage={getFromLocalStorage}
                globalError={globalError}
                isLoading={isLoading}
              />}
            />
            <Route
              exact
              path="saved"
              element={<SavedMovies
                isSavedMovieList={true}
                handleGetSavedMovies={handleGetSavedMovies}
                savedMovies={savedMovies}
                handleRemoveMovie={handleRemoveMovie}
                onFilter={filterByDuration}
                onSearch={handleSearch}
                globalError={globalError}
                isLoading={isLoading}
              />}
            />
          </Route>

          <Route path='/profile' element={<ProtectedRoutes loggedIn={loggedIn}/>}>
            <Route
              path=''
              element={<Profile
                name={currentUser.name}
                email={currentUser.email}
                handleUpdateUser={handleUpdateUser}
                handleLogOut={handleLogOut}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                successMessage={successMessage}
                setSuccessMessage={setSuccessMessage}
                isLoading={isLoading}
              />}

            />
          </Route>

          <Route path='/signin' element={<ProtectedRoutes loggedIn={!loggedIn} />}>
            <Route
              exact
              path=''
              element={<Login
                handleLogin={handleLogin}
                errorMessage={errorMessage}
                isLoading={isLoading}
                loggedIn={loggedIn}
              />}
            />
          </Route>


          <Route path='/signup' element={<ProtectedRoutes loggedIn={!loggedIn} />}>
            <Route
              exact
              path=''
              element={<Register
                handleRegister={handleRegister}
                errorMessage={errorMessage}
                isLoading={isLoading}
                currentUser={currentUser}
              />}
            />
          </Route>

          <Route
            exact
            path="*"
            element={<NotFound/>}
          />

        </Routes>
      </section>
    </CurrentUserContext.Provider>

  )
    ;
}

export default App;
