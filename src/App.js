import './App.css';
import { useState, useEffect } from 'react';
import Movies from './MovieBox';
import SingleMovie from './SingleMovieCont'
import Header from './Header'
import { getMoviePosters, fetchSingleMovie } from './apiCalls'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState([]);
  const [individualMovie, setIndividualMovie] = useState()
  const [error, setError] = useState('')

  useEffect(() => {
    getMoviePosters()
      .then(data => setMovies(data.movies))
      .then(res => {
        setError('')
        if (res === 500) {
          throw new Error('Something Went Wrong On The Server')
        }
        return res
      })
      .catch(error => setError(`Request Failed: ${error.message}`))
    }, [])

  function showIndividualMovie(id) {
    fetchSingleMovie(id)
      .then(data => setIndividualMovie(data.movie)) 
      .then(res => {
        setError('')
        if (res === 500) {
          throw new Error('Something Went Wrong On The Server')
        }
        return res
      })
      .catch(error => setError(`Request Failed: ${error.message}`))
    }
  

  function showAllPosters() {
    setIndividualMovie(null)
  }

  return (
    
    <div>
      <Header showAllPosters={showAllPosters}/>
      {error && <div className='error-message'><p>{error}</p></div>}
      <Routes>
        <Route path='/' element={<Movies movies={movies} />}></Route>
        <Route path='/:id' element={<SingleMovie showIndividualMovie={showIndividualMovie} individualMovie={individualMovie} />}></Route>
      </Routes>
    </div>
  )
}

export default App;
