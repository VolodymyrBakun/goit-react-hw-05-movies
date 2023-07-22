import { Route, Routes, NavLink } from "react-router-dom";
// import { lazy, Suspense } from "react";

import HomePage from "pages/HomePage";
import Movies from "pages/Movies";
import { MovieDetails } from "./MovieDetails/MovieDetails";

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieID/*" element={<MovieDetails />} />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;