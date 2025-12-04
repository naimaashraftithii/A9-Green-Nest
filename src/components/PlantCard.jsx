import React from "react";
import { Link } from "react-router-dom";

const PlantCard = ({ p }) => (
  <div
    className="
      group relative rounded-xl 
      bg-base-100 dark:bg-slate-900 
      text-gray-900 dark:text-slate-100
      shadow hover:shadow-2xl 
      transition-all duration-300
      hover:-translate-y-1
    "
  >
    {/* image */}
    <figure className="relative overflow-hidden rounded-t-xl w-full">
      <img
        src={p.image}
        alt={p.plantName}
        className="
          w-full h-56 object-cover
          transition-transform duration-500
          group-hover:scale-110
        "
        loading="lazy"
      />
      <div
        className="
          absolute inset-0
          opacity-0 group-hover:opacity-40
          transition-opacity duration-300
          bg-linear-to-t from-green-700 via-emerald-400 to-lime-300
          rounded-t-xl
        "
      />
    </figure>

    <div className="card-body items-center text-center gap-2 py-4">
      <h3
        className="
          font-bold text-xl
          text-gray-300 dark:text-emerald-200
          transition-colors duration-300
          group-hover:text-green-700 dark:group-hover:text-emerald-300
        "
      >
        {p.plantName}
      </h3>

      <div className="flex items-center gap-4 text-sm text-gray-300 dark:text-gray-300">
        <span className="font-semibold">
          Price:{" "}
          <span className="text-green-600 dark:text-emerald-300">
            ${p.price}
          </span>
        </span>
        <span className="font-semibold">⭐ {p.rating}</span>
      </div>

      <Link
        className="
          btn btn-sm text-white 
          bg-linear-to-r from-blue-500 via-purple-500 to-pink-500
          border-none
          hover:brightness-110 hover:scale-[1.05]
          transition-transform duration-300 shadow-md
        "
        to={`/plants/${p.plantId}`}
      >
        View Details
      </Link>
    </div>
  </div>
);

export default PlantCard;
