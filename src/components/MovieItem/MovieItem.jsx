import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledMovieItem } from './StyledMovieItem';

export function MovieItem({ data }) {
  const location = useLocation();

  return (
    <StyledMovieItem>
      <NavLink to={`/movies/${data.id}`} state={{ from: location }}>
        {data.original_title ?? 'Movie'}
      </NavLink>
    </StyledMovieItem>
  );
}

MovieItem.propTypes = {
  data: PropTypes.object.isRequired,
};
