import { useEffect, useState } from 'react';
import { MoviesApi } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';

const HomePage = () => {
    const [trendingMovies, setTrandingMovies] = useState(null);


  useEffect(() => {
    const getMovieData = async () => {
      const MovieData = await MoviesApi.fetchMovies();
      setTrandingMovies(MovieData.data.results)
    
    };
      getMovieData();
  }, []);

  return (
    <div>
      <p>Trending today</p>
      {trendingMovies && <MovieList movies={trendingMovies} />}
    </div>
  );
};

export default HomePage;
