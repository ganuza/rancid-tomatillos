import PropTypes from "prop-types";
import "./SingleMovieCard.css";

function SingleMovieCard({
  title,
  backdrop_path,
  average_rating,
  release_date,
  overview,
  tagline,
  runtime,
  genres,
}) {
  return (
    <div className="single-movie-card">
      <article className="card-header">
        <h2 className="single-movie-title">{title}</h2>
        <h2 className="tagline">{tagline}</h2>
      </article>
      <main className="main-wrapper">
        <section className="left-card-wrapper">
          <img className="single-movie-img" src={backdrop_path} />
          <section className="details-cont">
            <article className="details-article">
              <h2 className="details-text">{average_rating.toFixed(1)} / 10</h2>
            </article>
            <article className="details-article">
              <h2 className="details-text"> {runtime} MINUTES</h2>
            </article>
            <article className="details-article">
              <h2 className="details-text">
                RELEASE: {release_date.slice(0, 4)}
              </h2>
            </article>
            <article className="details-article">
              <h2 className="details-text"> {genres.join(" / ")}</h2>
            </article>
          </section>
        </section>
        <article className="overview">
          <h2 className="overview-text">{overview}</h2>
        </article>
      </main>
    </div>
  );
}

SingleMovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  backdrop_path: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  average_rating: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
};

export default SingleMovieCard;
