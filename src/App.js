import "./App.css";
import { useState, useEffect } from "react";
import Movies from "./MovieBox";
import SingleMovie from "./SingleMovieCont";
import Header from "./Header";
import { getMoviePosters, fetchSingleMovie } from "./apiCalls";
import { Routes, Route } from "react-router-dom";
import ErrorMessages from "./ErrorMessages";

function App() {
  const [movies, setMovies] = useState([]);
  const [individualMovie, setIndividualMovie] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    getMoviePosters()
      .then((data) => {
        // setError("");
        setMovies(data.movies)
        return data
      })
      .catch((error) => setError(`Request Failed: ${error.message}`));
  }, []);

  function showIndividualMovie(id) {
    fetchSingleMovie(id)
      .then((data) => {
        setError("");
        setIndividualMovie(data.movie);
        return data;
      })
      .catch((error) => {
        console.log('im in the catch!')
        setError(`Request Failed: ${error.message}`)
      console.log('error', error)});
        
  }

  function showAllPosters() {
    setIndividualMovie(null);
  }

  return (
    <div>
      <Header showAllPosters={showAllPosters} />
      {error && 
        <div className="error-message">
          <p>{error}</p>
        </div>
      }
      <Routes>
        <Route path="/" element={<Movies movies={movies} />}></Route>
        <Route
          path="/:id"
          element={
            <SingleMovie
              showIndividualMovie={showIndividualMovie}
              individualMovie={individualMovie}
            />
          }
        ></Route>
        {/* <Route path="*" element={<ErrorMessages />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
