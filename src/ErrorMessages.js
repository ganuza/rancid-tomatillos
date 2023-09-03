import "./ErrorMessages.css";

function ErrorMessages({ moviesError }) {
  return (
    <div className="error-message404">
      <div className="error-message">
        <p className="p-movies-error">{moviesError}</p>
      </div>
    </div>
  );
}

export default ErrorMessages;
