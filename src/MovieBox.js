import "./MovieBox.css";
import MovieCard from "./MovieCard";
import PropTypes from 'prop-types'

function Movies({ movies, showIndividualMovie }) {
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
      {movieCards}
    </div>
  )
}

export default Movies;

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  showIndividualMovie: PropTypes.func
};