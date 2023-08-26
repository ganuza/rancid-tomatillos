import "./SingleMovieCard.css"

function SingleMovieCard ({title, backdrop_path, id, average_rating, release_date}) {
  return (
    <div className="single-movie-card">
      <h2>{title}</h2>
      <img className="single-movie-img" src={backdrop_path} />
      <h2>RATING: {average_rating.toFixed(1)} / 10</h2>
      <h2>RELEASE DATE:  {release_date}</h2>
    </div>
  )
}

export default SingleMovieCard