import "./ErrorMessages.css";

function ErrorMessages({moviesError}) {

  return (
    <div className="error-message404">
      
        <div className="error-message">
        <p className="p-movies-error">{moviesError}</p>
      </div>
      {/* {singleMovieError &&
        <div className="error-message">
        <p className="p-single-movie-error">{singleMovieError}</p>
      </div>} */}
    </div>
  );
}

export default ErrorMessages;
