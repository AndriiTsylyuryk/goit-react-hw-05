import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";

import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import FilmList from "./FilmList/FilmList";
import Movies from "../Pages/Movies/Movies";
import FilmDetails from "../Pages/FilmDetails/FilmDetails";
import s from "./App.module.css";
import Cast from "../Pages/Cast/Cast";
import Reviews from "../Pages/Reviews/Reviews";

const App = () => {
  return (
    <div className={s.container}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:filmId" element={<FilmDetails />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
