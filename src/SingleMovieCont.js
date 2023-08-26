import "./SingleMovieCont.css"
import SingleMovieCard from "./SingleMovieCard"

function SingleMovie({ individualMovie }) {
  
  return (
    <div className="single-movie-cont">
      <SingleMovieCard
        title={individualMovie.title}
        backdrop_path={individualMovie.backdrop_path}
        id={individualMovie.id}
        average_rating={individualMovie.average_rating}
        release_date={individualMovie.release_date}
      />
    </div>
  )
}




export default SingleMovie