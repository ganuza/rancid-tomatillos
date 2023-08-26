import "./MovieCard.css";

function MovieCard({ img, id, showIndividualMovie }) {
  return (
    <div className="movie-card">
      <button onClick={()=> showIndividualMovie(id)}><img className="movie-img" src={img} /></button>
    </div>
  )
}

export default MovieCard