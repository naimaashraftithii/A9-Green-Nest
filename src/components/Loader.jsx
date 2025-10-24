import React from "react";
import logo from "../assets/logo.png"; // use your actual logo path

export default function Loader({ label = "Loading...!!!Await....🎯" }) {
  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center text-center gap-3">
      <div className="relative">
        {/* rotating logo */}
        <img
          src={logo}
          alt="Loading"
          className="h-16 w-16 animate-spin-slow drop-shadow-lg"
        />
        {/* soft glow effect */}
        <span className="absolute inset-0 rounded-full bg-emerald-300/20 blur-xl animate-pulse" />
      </div>
      <p className="opacity-75 text-gray-700 font-medium">{label}</p>

      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 2.5s linear infinite;
        }
      `}</style>
    </div>
  );
}
