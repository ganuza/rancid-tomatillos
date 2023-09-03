function getMoviePosters() {
  return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies").then(
    (res) => {
      if (!res.ok) {
        throw new Error("Something Went Wrong On The Server");
      }
      return res.json();
    }
  );
}

function fetchSingleMovie(id) {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error("Something Went Wrong On The Server");
    }
    return res.json();
  });
}

export { getMoviePosters, fetchSingleMovie };
