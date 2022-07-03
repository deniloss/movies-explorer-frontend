import './App.css';
import React from 'react';
import {Routes, Route, useNavigate} from "react-router";

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ProtectedRoutes from "../ProtectedRoute/ProtectedRoutes";

import {CurrentUserContext} from "../../context/currentUserContext";

import NotFound from "../NotFound/NotFound";
import {saveMovie, removeMovie, signUp, logIn, getUser, updateUser} from "../../utils/MainApi";
import {getSavedMovies} from "../../utils/MoviesApi";

function App() {

  let navigate = useNavigate();

  // ****************** Авторизация пользователей

  const [savedMovies, setSavedMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    handleGetUser();

    if (loggedIn) {
      getSavedMovies()
        .then((data) => setSavedMovies(data))
    }
  }, []);

  const handleRegister = ({email, name, password}) => {
    signUp({email, name, password})
      .then(() => {
        handleLogin({email, password})
      })
      .catch((err) => console.log(err))
  }

  const handleLogin = ({email, password}) => {
    logIn({email, password})
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem('jwt', data.jwt);
          setLoggedIn(true);
          handleGetUser();
          navigate('/movies', {replace: true})
        }
      })
      .catch((err) => console.log(err))
  }

  const handleGetUser = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      getUser()
        .then((data) => {
          if (data) {
            setLoggedIn(true);
            setCurrentUser(data);
          }
        })
        .catch((err) => console.log(err))
    } else setLoggedIn(false);
  }

  const handleUpdateUser = (name, email) => {
    updateUser(name, email)
      .then((data) => {
        if (data) {
          setCurrentUser(data);
        }
      })
      .catch((err) => console.log(err))
  }

  const handleLogOut = () => {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    setCurrentUser({})
  }


  // ****************** Работа с фильмами

  const handleSaveMovie = (movie) => {
    saveMovie(movie)
      .then((movie) => {
        setSavedMovies([movie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleRemoveMovie = (id) => {
    removeMovie(id)
      .then(() => setSavedMovies(savedMovies.filter(item => item._id !== id)))
      .catch((err) => console.log(err))
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
                isSavedMovieList={false}
                handleSaveMovie={handleSaveMovie}
                handleRemoveMovie={handleRemoveMovie}
                savedMovies={savedMovies}
              />}
            />
            <Route
              exact
              path="saved"
              element={<SavedMovies
                isSavedMovieList={true}
                setSavedMovies={setSavedMovies}
                savedMovies={savedMovies}
                handleRemoveMovie={handleRemoveMovie}
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
                handleLogOut={handleLogOut}/>}/>
          </Route>

          <Route
            exact
            path="signin"
            element={<Login handleLogin={handleLogin}/>}
          />
          <Route
            exact
            path="signup"
            element={<Register handleRegister={handleRegister}/>}
          />
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
