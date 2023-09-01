import PropTypes from "prop-types";
import "./SingleMovieCont.css";
import SingleMovieCard from "./SingleMovieCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ErrorMessages from "./ErrorMessages";

function SingleMovie({ showIndividualMovie, individualMovie, isGoodRequest, isLoading }) {
  const { id } = useParams();
  
  useEffect(() => {
    showIndividualMovie(id);
  }, []);
  
  useEffect(() => {
    console.log('individualMovie: ', individualMovie)
  }, [individualMovie])
  
  if (isGoodRequest && !isLoading && individualMovie?.title) {

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
    <ErrorMessages />
    );
  }
  
  // return (
    
  //      <div className="single-movie-cont">
  //      {isGoodRequest && !isLoading && individualMovie?.title? && <SingleMovieCard
  //         title={individualMovie.title}
  //         backdrop_path={individualMovie.backdrop_path}
  //         id={individualMovie.id}
  //         average_rating={individualMovie.average_rating}
  //         release_date={individualMovie.release_date}
  //         overview={individualMovie.overview}
  //         tagline={individualMovie.tagline}
  //         runtime={individualMovie.runtime}
  //         genres={individualMovie.genres}
  //       />}
  //       !isGoodRequest && !isLoading && <ErrorMessages />
  //     </div>
    
  // )
}

SingleMovie.propTypes = {
  individualMovie: PropTypes.object,
};

export default SingleMovie;
