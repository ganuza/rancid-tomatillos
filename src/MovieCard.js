import PropTypes from "prop-types";
import "./MovieCard.css";

function MovieCard({ img, id, showIndividualMovie }) {
  return (
    <div className="movie-card" onClick={() => showIndividualMovie(id)}>
      <img className="movie-img" src={img} />
    </div>
  );
}

MovieCard.propTypes = {
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  showIndividualMovie: PropTypes.func.isRequired,
};

export default MovieCard;
