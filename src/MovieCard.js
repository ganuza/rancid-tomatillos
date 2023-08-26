import "./MovieCard.css";

function MovieCard({ img, id, showIndividualMovie }) {
  return (
    <div className="movie-card" onClick={()=> showIndividualMovie(id)}><img className="movie-img" src={img} />
    </div>
  )
}

export default MovieCard