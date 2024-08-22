import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import movies from "./data/movies"; // Import your movies data

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
