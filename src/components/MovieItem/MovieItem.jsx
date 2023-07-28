import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';


export function MovieItem({ data }) {
    const location = useLocation();
    
    return (
      <NavLink to={`/movies/${data.id}`} state={{ from: location }}
      >
        {data.original_title ?? "Movie"}
      </NavLink>
    );
};

MovieItem.propTypes = {
  data: PropTypes.array.isRequired
}