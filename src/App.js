import "./App.css";
import { useState, useEffect } from "react";
import Movies from "./MovieBox";
import SingleMovie from "./SingleMovieCont";
import Header from "./Header";
import { getMoviePosters, fetchSingleMovie } from "./apiCalls";
import { Routes, Route, useNavigate } from "react-router-dom";
import ErrorMessages from "./ErrorMessages";

function App() {
  const [movies, setMovies] = useState([]);
  const [individualMovie, setIndividualMovie] = useState();
  const [moviesError, setMoviesError] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isGoodRequest, setIsGoodRequest] = useState(true);

  useEffect(() => {
    setMoviesError("");
    getMoviePosters()
      .then((data) => {
        setMovies(data.movies);
        setIsLoading(false);
        setIsGoodRequest(true);
        return data;
      })
      .catch((error) => {
        setMoviesError(`Request Failed: ${error.message}`);
        setIsGoodRequest(false);
        setIsLoading(false);
        navigate("/error");
      });
  }, []);

  function showIndividualMovie(id) {
    setIsLoading(true);
    fetchSingleMovie(id)
      .then((data) => {
        setIndividualMovie(data.movie);
        setIsGoodRequest(true);
        setIsLoading(false);
        return data;
      })
      .catch((error) => {
        setIsLoading(false);
        setIsGoodRequest(false);
        setMoviesError(`Request Failed: ${error.message}`);
        navigate("/error");
      });
  }

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Movies movies={movies} />}></Route>
        <Route
          path="/:id"
          element={
            <SingleMovie
              isLoading={isLoading}
              isGoodRequest={isGoodRequest}
              showIndividualMovie={showIndividualMovie}
              individualMovie={individualMovie}
            />
          }
        ></Route>
        <Route
          path="/error"
          element={<ErrorMessages moviesError={moviesError} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
