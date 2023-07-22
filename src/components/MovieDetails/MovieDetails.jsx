import  Cast  from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { MoviesApi } from 'services/api';

export function MovieDetails() {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!movieID) return;

    const fetchDetails = async () => {
      try {
        const detailedMovie = await MoviesApi.fetchMovieDetails(movieID);
        setMovie(detailedMovie);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDetails();
  }, [movieID]);

  return (
    <>
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={200}
          />
          <div>
            <h1>{movie.title}</h1>
            <p>Vote Average: {movie.vote_average}</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h3>Genres:</h3>
            {movie.genres?.length > 0
              ? movie.genres.map(({ id, name }) => {
                  return (
                    <p className="genre" key={id}>
                      {name}
                    </p>
                  );
                })
              : 'No genres'}
          </div>
          <div>
            <h2>Additional Info</h2>
            <Link to="cast">Cast</Link>
            <Link to="revievs">Revievs</Link>
          </div>
          <Routes>
            <Route path="cast" element={<Cast/>} />
            <Route path="revievs" element={<Reviews/>} />
          </Routes>
        </div>
      )}
    </>
  );
}
