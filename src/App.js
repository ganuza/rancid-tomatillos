import './App.css';
import { useState } from 'react';
import movieData from './movieData';
import Movies from './MovieBox';
import SingleMovie from './SingleMovieCont'
import Header from './Header'

function App() {
  const [movies, setMovies] = useState(movieData.movies);
  const [individualMovie, setIndividualMovie] = useState(null)

  function showIndividualMovie(id) {
    const selectedMovie = movies.find(movie => movie.id === id)
    setIndividualMovie(selectedMovie)
  }

  function showAllPosters() {
    setIndividualMovie(null)
  }

  return (
    
    <div>
      <Header showAllPosters={showAllPosters}/>
      {!individualMovie && <Movies movies={movies} showIndividualMovie={showIndividualMovie}/>}
      {individualMovie && <SingleMovie individualMovie={individualMovie} />}
    </div>
  )
}

export default App;
