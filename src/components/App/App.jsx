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
import {saveMovie, removeMovie, signUp, logIn, logOut, getUser, updateUser} from "../../utils/MainApi";

function App() {

  let navigate = useNavigate();

  // ****************** Авторизация пользователей

  const [savedMovies, setSavedMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    handleGetUser();
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
        if(data.jwt) {
          localStorage.setItem('jwt', data.jwt);
          setLoggedIn(true);
          handleGetUser();
        }
      })
      .catch((err) => console.log(err))
  }

  const handleGetUser = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      getUser()
        .then((data) => {
          if(data) {
            setLoggedIn(true);
            setCurrentUser(data);
          }
        })
        .then(() => navigate('/movies', {replace: true}))
        .catch((err) => console.log(err))
    } else setLoggedIn(false);
  }

  const handleUpdateUser = (name, email) => {
    updateUser(name, email)
      .then((data) => {
        if(data) {
          setCurrentUser(data);
        }
      })
      .catch((err) => console.log(err))
  }

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setLoggedIn(false);
        localStorage.removeItem('jwt');
      })
      .catch((err) => console.log(err))
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
      .then(() => {
        const newSavedMovies = savedMovies.filter((movie) => movie._id !== id);
        setSavedMovies(newSavedMovies);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <section className="App">
          <Routes>

            <Route
              exact
              path='/'
              element={<Main/>}
            />


            <Route path='/' element={<ProtectedRoutes loggedIn={loggedIn}/>}>
              <Route
                exact
                path="movies"
                element={<Movies
                  isSavedMovieList={false}
                  handleSaveMovie={handleSaveMovie}
                  handleRemoveMovie={handleRemoveMovie}
                />}
              />
              <Route
                exact
                path="saved-movies"
                element={<SavedMovies
                  isSavedMovieList={true}
                />}
              />
              <Route
                exact
                path="profile"
                element={<Profile name={currentUser.name} email={currentUser.email} handleUpdateUser={handleUpdateUser} handleLogOut={handleLogOut}/>}
              />
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

  );
}

export default App;
