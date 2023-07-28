import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesApi } from 'services/api';

import { SearchBar } from 'components/SearchBar/SearchBar';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedMovies, setSearchedMovies] = useState(null);
  const movieName = searchParams.get('movie') ?? '';

  useEffect(() => {
    if (!movieName) return setSearchedMovies(null);

    const fetchSearchedMovies = async () => {
      try {
        const searchedData = await MoviesApi.fetchMovieByQuery(movieName);
        setSearchedMovies(searchedData.data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchSearchedMovies();
  }, [movieName, searchedMovies]);
    
     const updateQueryString = name => {
       const nextParams =
         name !== '' ? { movie: name } : {};
       setSearchParams(nextParams);
     };

  return (
    <>
      <SearchBar onSearch={updateQueryString} />
      {searchedMovies && <MovieList movies={searchedMovies} />}
    </>
  );
};

export default Movies;
