import PropTypes from "prop-types";
import "./MovieCard.css";
import { NavLink } from "react-router-dom";

function MovieCard({ img, id}) {
  return (
    <NavLink to={`/${id}`} className="movie-card">
      <img className="movie-img" src={img} />
    </NavLink>
  );
}

MovieCard.propTypes = {
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default MovieCard;
