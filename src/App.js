import './App.css';
import { useState } from 'react';
import movieData from './movieData';
import Movies from './MovieBox';

function App() {
  const [movies, setMovies] = useState(movieData.movies);
  const [individualMovie, setIndividualMovie] = useState(null)

  function showIndividualMovie(id) {
    const individualMovie = movies.find(movie => movie.id === id)
    setIndividualMovie(individualMovie)
  }

  return (
    <div>
      {/* <h1>{movieData.movies[0].title}</h1>
      <img src={movieData.movies[0].poster_path} /> */}
      <Movies movies={movies} showIndividualMovie={showIndividualMovie}/>
    </div>
  )
}

export default App;
