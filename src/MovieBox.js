import "./MovieBox.css";
import MovieCard from "./MovieCard";

function Movies({ movies }) {
  // console.log('movies', movies)
  const movieCards = movies.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        img={movie.poster_path}
        id={movie.id}
      />
    )
  })
  return (
    <div className="movies-box">
      {/* <h2>movie name: {movies[0].title}</h2> */}
      {movieCards}
    </div>
  )
}

export default Movies;