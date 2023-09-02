import "./ErrorMessages.css";

function ErrorMessages({moviesError, singleMovieError}) {

  return (
    <div className="error-message404">
      {moviesError &&
        <div className="error-message">
        <p>{moviesError}</p>
      </div>}
      {singleMovieError &&
        <div className="error-message">
        <p>{singleMovieError}</p>
      </div>}
    </div>
  );
}

export default ErrorMessages;
