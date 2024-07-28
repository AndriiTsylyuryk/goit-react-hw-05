import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";

// import Error from "../Pages/Error/Error";
import Home from "../pages/Home/Home";

import Movies from "../pages/Movies/Movies";
// import FilmDetails from "../Pages/FilmDetails/FilmDetails";
import s from "./App.module.css";

import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import { lazy, Suspense } from "react";

const FilmDetails = lazy(() => import("../pages/FilmDetails/FilmDetails"))
const Error = lazy(()=> import("../pages/Error/Error"))

const App = () => {
  return (
    <div className={s.container}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:filmId" element={<FilmDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      </Suspense>
    </div>
  );
};

export default App;
