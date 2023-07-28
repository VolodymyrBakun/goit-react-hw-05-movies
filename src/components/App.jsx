import { Route, Routes, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { StyledHeader, StyledNav } from './Styled';

const LazyHomePage = lazy(() => import('pages/HomePage'));
const LazyMovies = lazy(() => import('pages/Movies'));
const LazyMovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

const App = () => {
  return (
    <div>
      <StyledHeader>
        <StyledNav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </StyledNav>
      </StyledHeader>
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
