import './App.css';
import { useState } from 'react';
import movieData from './movieData';

function App() {
  const [movies, setMovies] = useState(movieData.movies);

  return (
    <div>
      <h1>{movieData.movies[0].title}</h1>
      <img src={movieData.movies[0].poster_path} />
    </div>
  )
}

export default App;
