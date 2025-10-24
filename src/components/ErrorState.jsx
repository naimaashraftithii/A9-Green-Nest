import React from "react";
import errImg from "../assets/error-404.png";
import { Link } from "react-router-dom";

const ErrorState = ({
  title = "Something went wrong",
  message = "We couldn’t load the data right now. Please try again later.",
  onRetry,
}) => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl">
        <img
          src={errImg}
          alt="Error"
          className="mx-auto h-44 w-auto mb-4 animate-pulse"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{title}</h2>
        {message && (
          <p className="mt-1 text-gray-600 leading-relaxed">{message}</p>
        )}

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-5 py-2 rounded-lg border border-emerald-500 text-emerald-700 font-medium hover:bg-emerald-50 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              🔄 Try Again
            </button>
          )}

          <Link
            to="/"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
            🏠 Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorState;
