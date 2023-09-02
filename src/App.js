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
  const [moviesError, setMoviesError] = useState("");
  const [singleMovieError, setSingleMovieError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isGoodRequest, setIsGoodRequest] = useState(true);

  useEffect(() => {
    getMoviePosters()
      .then((data) => {
        setMoviesError("");
        setMovies(data.movies);
        setIsLoading(false);
        setIsGoodRequest(true);
        return data;
      })
      .catch((error) => {
        console.log("error", error);
        setMoviesError(`Request Failed: ${error.message}`);
        setIsGoodRequest(false);
        setIsLoading(false);
      });
  }, []);

  function showIndividualMovie(id) {
    setIsLoading(true);
    fetchSingleMovie(id)
      .then((data) => {
        setSingleMovieError();
        setIndividualMovie(data.movie);
        setIsGoodRequest(true);
        setIsLoading(false);
        return data;
      })
      .catch((error) => {
        console.log("im in the catch!");
        setIsLoading(false);
        setIsGoodRequest(false);
        setSingleMovieError(`Request Failed: ${error.message}`);
        console.log("error", error);
      });
  }

  function showAllPosters() {
    setIndividualMovie(null);
  }

  return (
    <div>
      <Header />
      {!isGoodRequest && !isLoading && (
        <div className="error-message">
          <p>{moviesError}</p>
        </div>
      )}
      {/* {!isGoodRequest && 
        <div className="error-message">
          <p>{singleMovieError}</p>
        </div>
      } */}

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
        {/* <Route path="*" element={<ErrorMessages />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
