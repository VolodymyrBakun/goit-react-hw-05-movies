import { Route, Routes, NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";

const LazyHomePage = lazy(() => import('pages/HomePage'));
const LazyMovies = lazy(() => import('pages/Movies'));
const LazyMovieDetails = lazy(() => import('./MovieDetails/MovieDetails'))

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LazyHomePage />} />
          <Route path="/movies" element={<LazyMovies />} />
          <Route path="/movies/:movieID/*" element={<LazyMovieDetails />} />

          <Route path="*" element={<LazyHomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;