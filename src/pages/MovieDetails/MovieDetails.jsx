import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { MoviesApi } from 'services/api';
import {
  StyledMovieDetails,
  StyledMovieWrap,
  StyledAdditionalInfoLinks,
} from './StyledMovieDetails';

// const LazyCast = lazy(() => import('components/Cast/Cast'));
// const LazyReviews = lazy(() => import('components/Reviews/Reviews'));

function MovieDetails() {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

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
        <StyledMovieDetails>
          <Link to={backLinkLocationRef.current}>Go back</Link>
          <StyledMovieWrap>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
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
          </StyledMovieWrap>
          <div>
            <h2>Additional Info</h2>
            <StyledAdditionalInfoLinks>
              <Link to="cast">Cast</Link>
              <Link to="revievs">Revievs</Link>
            </StyledAdditionalInfoLinks>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </StyledMovieDetails>
      )}
    </>
  );
}

export default MovieDetails;
