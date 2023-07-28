import { MovieItem } from "components/MovieItem/MovieItem";
import PropTypes from 'prop-types';

export function MovieList ({movies}) {
    return (
        <ul>
            {movies.map(movie => {return (
              <li key={movie.id}>
                <MovieItem data={movie} />
              </li>
            );})}
        </ul>
    )
};

MovieList.propTypes = {
  movies: PropTypes.object.isRequired
}

