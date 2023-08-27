import PropTypes from 'prop-types'
import "./SingleMovieCard.css"

function SingleMovieCard ({title, backdrop_path, id, average_rating, release_date, overview, tagline, runtime, genres}) {
  return (
    <div className="single-movie-card">
      <h2>{title}</h2>
      <h2>{tagline}</h2>
      <img className="single-movie-img" src={backdrop_path} />
      <h2>{overview}</h2>
      <h2>RATING: {average_rating.toFixed(1)} / 10</h2>
      <h2>RUNTIME: {runtime} MINUTES</h2>
      <h2>RELEASE DATE:  {release_date}</h2>
      <h2>GENRES: {genres.join(' / ').split('')}</h2>
    </div>
  )
}

SingleMovieCard.propTypes = {
  title: PropTypes.string.isRequired, 
  backdrop_path: PropTypes.string.isRequired, 
  id: PropTypes.number.isRequired, 
  average_rating: PropTypes.number.isRequired, 
  release_date: PropTypes.string.isRequired, 
  overview: PropTypes.string.isRequired, 
  tagline: PropTypes.string.isRequired, 
  runtime: PropTypes.number.isRequired, 
  genres: PropTypes.array.isRequired
}

export default SingleMovieCard