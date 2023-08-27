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
  const [error, setError] = useState('')

  useEffect(() => {
    getMoviePosters()
      .then(data => setMovies(data.movies))
      .then(res => {
        if (res === 500) {
          throw new Error('Something Went Wrong On The Server')
        }
        return res.json()
      })
      .catch(error => setError(`Request Failed: ${error.message}`))
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
      {error && <div><p>{error}</p></div>}
    </div>
  )
}

export default App;
