import React, { useContext, useEffect, useMemo, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const PlantDetails = () => {
  const { id } = useParams();
  const [plants, setPlants] = useState([]);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch("/plantsdata.json")
      .then((r) => r.json())
      .then(setPlants);
  }, []);

  const plant = useMemo(
    () => plants.find((p) => String(p.plantId) === String(id)),
    [plants, id]
  );

  const handleBook = (e) => {
    e.preventDefault();

    //  if NOT logged in 
    if (!user) {
      toast.info("Please login to book a consultation.");
      navigate("/login", { replace: true, state: location.pathname });
      return;
    }

    //  logged in 
    toast.success("Consultation booked successfully!");
    e.target.reset();
  };

  if (!plant) return <div className="container mx-auto py-10">Loading…</div>;

  return (
    <div className="container mx-auto py-10 grid lg:grid-cols-2 gap-8 text-gray-900 ">
      <img
        className="w-full h-80 object-cover rounded-xl"
        src={plant.image}
        alt={plant.plantName}
      />
      <div>
        <h1 className="text-3xl font-bold">{plant.plantName}</h1>
        <p className="opacity-80 mt-2">{plant.description}</p>
        <p className="mt-3">
          Category: <b>{plant.category}</b> • Stock:{" "}
          <b>{plant.availableStock}</b>
        </p>
        <p className="mt-1">
          Price: <b>${plant.price}</b> • Rating: <b>⭐ {plant.rating}</b>
        </p>
        <p className="mt-1">
          Care Level: <b>{plant.careLevel}</b>
        </p>
        <p className="mt-1">
          Provider: <b>{plant.providerName}</b>
        </p>

        <form onSubmit={handleBook} className="mt-6 space-y-3 max-w-md">
          <h3 className="font-semibold text-lg">Book Consultation</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered bg-gray-300 w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered bg-gray-300 w-full"
            required
          />
          <button className="my-btn">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default PlantDetails;
