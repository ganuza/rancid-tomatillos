import './App.css';
import { useState, useEffect } from 'react';
import movieData from './movieData';
import Movies from './MovieBox';
import SingleMovie from './SingleMovieCont'
import Header from './Header'
import getMoviePosters from './apiCalls'

function App() {
  const [movies, setMovies] = useState([]);
  const [individualMovie, setIndividualMovie] = useState(null)

  useEffect(() => {
    getMoviePosters()
      .then(data => setMovies(data.movies))
  }, [])

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
