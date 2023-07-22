import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesApi } from 'services/api';

function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieID } = useParams();

  useEffect(() => {
    if (!movieID) return;
    const fetchCast = async () => {
      try {
        const response = await MoviesApi.fetchMovieReviews(movieID);
        setReviews(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCast();
  }, [movieID]);

  return (
    <>
      {reviews && (
        <ul>
          {reviews.length === 0 && (
            <li>We don't have any reviews for this movie</li>
          )}
          {reviews.length > 0 &&
            reviews.map(review => (
              <li className="review-item" key={review.id}>
                <p>Author: {review.author}</p>
                <p>Character: {review.content}</p>
              </li>
            ))}
        </ul>
      )}
    </>
  );
}

export default Reviews;
