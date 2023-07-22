import { NavLink } from 'react-router-dom';

export function MovieItem( {data}) {
    return <NavLink to={`/movies/${data.id}`}>{data.original_title}</NavLink>;
}