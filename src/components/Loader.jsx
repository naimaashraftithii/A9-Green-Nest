import React from "react";
import logo from "../assets/logo.png"; // <-- put your file at src/assets/logo.png

const Loader = ({ fullScreen = true, label = "Loading...!!!Await....⏳" }) => (
  <div
    className={`w-full ${fullScreen ? "min-h-[60vh]" : ""} flex items-center justify-center`}
    role="status"
    aria-live="polite"
  >
    <div className="flex flex-col items-center gap-3">
      <img
        src={logo}
        alt="Loading"
        className="h-16 w-16 animate-spin"
        style={{ animationDuration: "1.2s" }}
      />
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  </div>
);

export default Loader;
