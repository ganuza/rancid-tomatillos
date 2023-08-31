function getMoviePosters() {
  return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then((res) => res.json())
    .catch((error) => console.log(error));
}

function fetchSingleMovie(id) {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
}

export { getMoviePosters, fetchSingleMovie };
