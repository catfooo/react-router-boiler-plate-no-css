// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';
import MovieList from './components/MovieList';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/upcoming?api_key=f9d2ab558f2c2df91f363af32212587c&language=en-US&page=1'
        );
        const data = await response.json();
        setMovies(data.results);
        setLoading(false); // Set loading to false when the data is fetched
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false); // Handle error and set loading to false
      }
    };

    fetchMovies();
  }, []); // Fetch movies when the component mounts

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          {/* Render the MovieList component and pass the fetched movies data */}
          <Route path="/" element={<MovieList movies={movies} loading={loading} />} />
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}
