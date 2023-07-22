import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesApi } from "services/api"


 function Cast() {
    const [casts, setCasts] = useState(null);
     const { movieID } = useParams();

     useEffect(() => {
         if (!movieID) return;
          const fetchCast = async () => {
        try {
            const response = await MoviesApi.fetchMovieCast(movieID);
            setCasts(response.data.cast)
        } catch (error) {
            console.log(error.message);
        }
    }
    fetchCast()
     }, [movieID])

    

    return (
      <>
        {casts && (
          <ul>
            {
              casts.map(cast => (
                <li className="cast-item" key={cast.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                          alt={cast.name}
                          width={120}
                  />
                  <p>{cast.name}</p>
                  <p>Character: {cast.character}</p>
                </li>
              ))}
          </ul>
        )}
      </>
    );
};

export default Cast