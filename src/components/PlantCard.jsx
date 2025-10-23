import React from "react";
import { Link } from "react-router-dom";

const PlantCard = ({ p }) => (
  <div className="card bg-base-100 shadow">
    <figure><img src={p.image} alt={p.plantName} className="h-48 w-full object-cover"/></figure>
    <div className="card-body">
      <h3 className="font-semibold">{p.plantName}</h3>
      <p className="text-sm opacity-80">${p.price} • ⭐ {p.rating}</p>
      <Link className="btn btn-sm btn-success text-white" to={`/plants/${p.plantId}`}>View Details</Link>
    </div>
  </div>
);

export default PlantCard;
