import { MovieItem } from 'components/MovieItem/MovieItem';
import PropTypes from 'prop-types';
import { StyledMovieList } from './StyledMovieList';

export function MovieList({ movies }) {
  return (
    <StyledMovieList>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <MovieItem data={movie} />
          </li>
        );
      })}
    </StyledMovieList>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
