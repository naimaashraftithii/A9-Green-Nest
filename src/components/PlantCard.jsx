import React from "react";
import { Link } from "react-router-dom";

const PlantCard = ({ p }) => (
  <div className="card bg-base-100 shadow">
    <figure><img src={p.image} alt={p.plantName} className="h-48 w-full object-cover"/></figure>
    <div className="card-body text-center">
      <h3 className="font-bold text-3xl">{p.plantName}</h3>
       <div className="flex items-center justify-center font-medium">
           <p className="text-sm opacity-80 ">Price : $ {p.price}</p>
           <p className="text-sm opacity-80 ">⭐{p.rating}</p>
       </div>
      <Link className="btn btn-sm btn-success text-white" to={`/plants/${p.plantId}`}>View Details</Link>
    </div>
  </div>
);

export default PlantCard;
