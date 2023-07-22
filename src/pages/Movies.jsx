import { useState, useEffect } from "react";
import { SearchBar } from "components/SearchBar/SearchBar";
import { MovieList } from "components/MovieList/MovieList";

const Movies = () => {
    const [query, setQuery] = useState(null);
    const [searchedMovies, setSearchedMovies] = useState(null)

    useEffect(() => {
        if (query) {
            
        }
    },[query])

    return (
        <>
            <SearchBar onSearch={setQuery} />
            {/* {query && <MovieList movies={searchedMovies} />} */}
        </>
)
};

export default Movies