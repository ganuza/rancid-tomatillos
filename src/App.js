import './App.css';
import { useState, useEffect } from 'react';
import movieData from './movieData';
import Movies from './MovieBox';
import SingleMovie from './SingleMovieCont'
import Header from './Header'
import { getMoviePosters, fetchSingleMovie } from './apiCalls'

function App() {
  const [movies, setMovies] = useState([]);
  const [individualMovie, setIndividualMovie] = useState('')

  useEffect(() => {
    getMoviePosters()
      .then(data => setMovies(data.movies))
  }, [])

  function showIndividualMovie(id) {
    fetchSingleMovie(id)
      .then(data => setIndividualMovie(data.movie))
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
