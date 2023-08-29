import "./App.css";
import { useState, useEffect } from "react";
import Movies from "./MovieBox";
import SingleMovie from "./SingleMovieCont";
import Header from "./Header";
import { getMoviePosters, fetchSingleMovie } from "./apiCalls";
import { Route, Routes } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);
  const [individualMovie, setIndividualMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getMoviePosters()
      .then((data) => setMovies(data.movies))
      .then((res) => {
        setError("");
        if (res === 500) {
          throw new Error("Something Went Wrong On The Server");
        }
        return res;
      })
      .catch((error) => setError(`Request Failed: ${error.message}`));
  }, []);

  function showIndividualMovie(id) {
    fetchSingleMovie(id)
      .then((data) => setIndividualMovie(data.movie))
      .then((res) => {
        setError("");
        if (res === 500) {
          throw new Error("Something Went Wrong On The Server");
        }
        return res;
      })
      .catch((error) => setError(`Request Failed: ${error.message}`));
  }

  function showAllPosters() {
    setIndividualMovie(null);
  }

  return (
    <main>
      <Header showAllPosters={showAllPosters} />
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Movies movies={movies} />} />
        <Route
          path="/:id"
          element={
            <SingleMovie
              showIndividualMovie={showIndividualMovie}
              individualMovie={individualMovie}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
