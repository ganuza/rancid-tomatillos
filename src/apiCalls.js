function getMoviePosters() {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(res => res.json())
    .catch(error => console.log(error))
}

export default getMoviePosters
