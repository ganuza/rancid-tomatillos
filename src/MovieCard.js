import PropTypes from "prop-types";
import "./MovieCard.css";
import { NavLink } from "react-router-dom";

function MovieCard({ img, id }) {
  return (
    <NavLink className="movie-card" to={`/${id}`}>
      <img className="movie-img" src={img} />
    </NavLink>
  );
}

MovieCard.propTypes = {
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default MovieCard;
