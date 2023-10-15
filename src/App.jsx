import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PostDetail from './PostDetail';

export const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/post/1">View Post 1</Link>
        {/* Add more links as needed */}
      </nav>

      <Routes>
        <Route path="/post/:postId" element={<PostDetail />} />
        {/* Add other routes if needed */}
      </Routes>
    </BrowserRouter>
  );
}
