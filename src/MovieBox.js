import "./MovieBox.css";
import MovieCard from "./MovieCard";
import PropTypes from 'prop-types'

function Movies({ movies, showIndividualMovie }) {
  // console.log('movies', movies)
  const movieCards = movies.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        img={movie.poster_path}
        id={movie.id}
        showIndividualMovie={showIndividualMovie}
      />
    )
  })
  return (
    <div className="movies-box">
      {/* <h2>movie name: {movies[0].title}</h2> */}
      {movieCards}
    </div>
  )
}

export default Movies;

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  showIndividualMovie: PropTypes.func.isRequired
};