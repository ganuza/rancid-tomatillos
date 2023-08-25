import "./MovieCard.css";

function MovieCard({ img, id }) {
  return (
    <div className="movie-card">
      <img className="movie-img" src={img} />
    </div>
  )
}

export default MovieCard