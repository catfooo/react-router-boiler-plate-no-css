import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=f9d2ab558f2c2df91f363af32212587c&language=en-US`
        );
        
        if (response.status === 404) {
          // Movie not found
          setNotFound(true);
        } else {
          const data = await response.json();
          setMovie(data);
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, [movieId]);

  if (notFound) {
    // Render a "not found" message or component
    return <div>Movie not found</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  // Define a style object with the background image
  const backgroundImageStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '500px', // Adjust the height as needed
    color: 'white',
    padding: '40px'
  };

  return (
    <div>
      {/* Apply the background image to a container element */}
      <div style={backgroundImageStyle}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
          <h1>{movie.title} ⭐{movie.vote_average}</h1>
          <p>{movie.overview}</p>
          {/* Add more movie details here */}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
