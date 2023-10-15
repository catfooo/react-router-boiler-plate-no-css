// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';
import MovieList from './components/MovieList'; // Import a new component for displaying the list

export const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/upcoming?api_key=f9d2ab558f2c2df91f363af32212587c&language=en-US&page=1'
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
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
          <Route path="/" element={<MovieList movies={movies} />} />
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}
