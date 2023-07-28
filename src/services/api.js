import axios from "axios";

const APIKEY = "b9984943b63ba7234c73c01c632259d1";

export const MoviesApi = {
  async fetchMovies() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=b9984943b63ba7234c73c01c632259d1`
    );
    return response;
  },

  async fetchMovieDetails(movieID) {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=${APIKEY}`
    );
      return data
    },
  
    async fetchMovieCast(movieId) {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${APIKEY}&language=en-US`
        );
        return response
    },

     async fetchMovieReviews(movieId) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${APIKEY}&language=en-US&page=1`
        );
        return response
    },
     
      async fetchMovieByQuery(movieQuery) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${movieQuery}&page=1&include_adult=false`
        );
        return response
    },
    
};


