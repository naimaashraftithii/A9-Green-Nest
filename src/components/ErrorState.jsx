import React from "react";
import errImg from "../assets/error-404.png"; // <-- put your file at src/assets/error-404.png
import { Link } from "react-router-dom";

const ErrorState = ({ title = "Something went wrong", message, onRetry }) => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md">
        <img src={errImg} alt="Error" className="mx-auto h-40 w-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        {message && <p className="mt-2 text-gray-600">{message}</p>}

        <div className="mt-5 flex gap-2 justify-center">
          {onRetry && (
            <button onClick={onRetry} className="btn btn-outline">
              Try again
            </button>
          )}
          <Link to="/" className="btn btn-success text-white">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorState;
