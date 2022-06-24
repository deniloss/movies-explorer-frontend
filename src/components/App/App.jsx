import './App.css';
import React from 'react';
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {createBrowserHistory} from "history";


import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ProtectedRoutes from "../ProtectedRoute/ProtectedRoutes";

import {CurrentUserContext} from "../../context/currentUserContext";

import NotFound from "../NotFound/NotFound";
import {saveMovie, removeMovie, signUp, logIn, logOut, getUser} from "../../utils/MainApi";

function App() {

  const history = createBrowserHistory();

  const [savedMovies, setSavedMovies] = React.useState([])
  const [currentUser, setCurrentUser] = React.useState({})
  const [loggedIn, setLoggedIn] = React.useState(false)

  const handleRegister = ({email, name, password}) => {
    signUp({email, name, password})
      .then(() => {
        handleLogin({email, password})
      })
      .catch((err) => console.log(err))
  }

  const handleLogin = ({email, password}) => {
    logIn({email, password})
      .then(() => {
        setLoggedIn(true);
        handleGetUser();
      })
      .catch((err) => console.log(err))
  }

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setLoggedIn(false);
        history.push('/')
      })
      .catch((err) => console.log(err))
  }

  const handleGetUser = () => {
    getUser()
      .then((res) => {
        console.log(res)
        const {name, email} = res;
        setCurrentUser({name, email});
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => console.log(err))
  }



  const handleSaveMovie = (id) => {
    saveMovie(id)
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
        <BrowserRouter>
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
                  handleSaveMovie={handleSaveMovie}
                />}
              />
              <Route
                exact
                path="profile"
                element={<Profile name={currentUser.name} email={currentUser.email} handleLogOut={handleLogOut}/>}
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
        </BrowserRouter>
      </section>
    </CurrentUserContext.Provider>

  );
}

export default App;
