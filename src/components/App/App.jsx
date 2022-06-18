import './App.css';
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';

import NotFound from "../NotFound/NotFound";

function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <Routes>

          <Route
            exact
            path='/'
            element={<Main />}
          />
          <Route
            exact
            path="movies"
            element={<Movies />}
          />
          <Route
            exact
            path="saved-movies"
            element={<SavedMovies />}
          />
          <Route
            exact
            path="profile"
            element={<Profile name='Вова' email='vovan@yandex.ru' />}
          />
          <Route
            exact
            path="signin"
            element={<Login />}
          />
          <Route
            exact
            path="signup"
            element={<Register />}
          />
          <Route
            exact
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
