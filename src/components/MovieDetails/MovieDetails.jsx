import { Suspense, lazy, useEffect, useState } from 'react';
import { Link, Route, Routes, useParams, useLocation } from 'react-router-dom';
import { MoviesApi } from 'services/api';

const LazyCast = lazy(() => import('components/Cast/Cast'));
const LazyReviews = lazy(() => import('components/Reviews/Reviews'));

 function MovieDetails() {
  const { movieID } = useParams();
    const [movie, setMovie] = useState(null);
    
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';


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
          <Link to={backLinkHref}>Go back</Link>
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
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="cast" element={<LazyCast />} />
              <Route path="revievs" element={<LazyReviews />} />
            </Routes>
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
