import "./MovieBox.css";

function Movies({ movies }) {
  console.log('movies', movies)
  return (
    <h2>movie name: {movies[0].title}</h2>
  )
}

export default Movies;