import React from "react";
import errImg from "../assets/error-404.png";
import { Link } from "react-router-dom";

const ErrorState = ({
  title = "Something went wrong",
  message = "We couldn’t load the page right now. Please try again later.",
  onRetry,
}) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md bg-white/85 backdrop-blur-md border border-emerald-200 rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-emerald-300 hover:-translate-y-1">
        {/* Error Image */}
        <img
          src={errImg}
          alt="Error"
          className="mx-auto h-44 w-auto mb-4 animate-bounce-slow"
        />

        {/* Error Text */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-emerald-700 mb-1">
          {title}
        </h2>
        {message && (
          <p className="mt-1 text-gray-700 leading-relaxed">{message}</p>
        )}

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-5 py-2 rounded-lg border border-emerald-500 text-emerald-700 font-semibold hover:bg-emerald-50 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              🔄 Try Again
            </button>
          )}

          <Link
            to="/"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Go Home 🏠
          </Link>
        </div>
      </div>

      {/* Animation*/}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ErrorState;
