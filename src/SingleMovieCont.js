import PropTypes from "prop-types";
import "./SingleMovieCont.css";
import SingleMovieCard from "./SingleMovieCard";
import { useParams } from "react-router-dom";

function SingleMovie({ showIndividualMovie, individualMovie }) {
  const {id} = useParams();
  showIndividualMovie(id);
  console.log("individualMovie", individualMovie)
  return individualMovie ? (
    <div className="single-movie-cont">
      <SingleMovieCard
        title={individualMovie.title}
        backdrop_path={individualMovie.backdrop_path}
        id={individualMovie.id}
        average_rating={individualMovie.average_rating}
        release_date={individualMovie.release_date}
        overview={individualMovie.overview}
        tagline={individualMovie.tagline}
        runtime={individualMovie.runtime}
        genres={individualMovie.genres}
      />
    </div>
  ) : (
    false
  );
}

SingleMovie.propTypes = {
  individualMovie: PropTypes.object,
  showIndividualMovie: PropTypes.func.isRequired
};

export default SingleMovie;
