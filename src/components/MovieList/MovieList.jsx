import { MovieItem } from "components/MovieItem/MovieItem";

export function MovieList ({movies}) {
    return (
        <ul>
            {movies.map(movie => {return (
              <li>
                <MovieItem key={movie.id} data={movie} />
              </li>
            );})}
        </ul>
    )
}

