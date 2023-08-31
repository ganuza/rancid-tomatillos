import PropTypes from 'prop-types'
import "./SingleMovieCard.css"

function SingleMovieCard ({title, backdrop_path, id, average_rating, release_date, overview, tagline, runtime, genres}) {
  return (
    <div className="single-movie-card">
      <h2 className="single-movie-title">{title}</h2>
      <h2>{tagline}</h2>
      <img className="single-movie-img" src={backdrop_path} />
      <h2>{overview}</h2>
      <section className="details-cont">
        <article className="details-article">
          <h2>RATING:<br></br><br></br> {average_rating.toFixed(1)} / 10</h2>
        </article>
        <article className="details-article">
          <h2>RUNTIME:<br></br><br></br> {runtime} MINUTES</h2>
        </article>
        <article className="details-article">
          <h2>RELEASE DATE:<br></br><br></br>{release_date}</h2>
        </article>
        <article className="details-article">
          <h2>GENRES:<br></br><br></br> {genres.join(' / ')}</h2>
        </article>
      </section>
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