import React, { useEffect, useState } from "react";
import PlantCard from "../components/PlantCard";

const Plants = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plantsdata.json")
      .then((r) => r.json())
      .then(setPlants);
  }, []);

  return (
    <div className="container mx-auto px-3 md:px-4 py-10">
      {/* Top Text Section */}
      <div className="text-center pb-6">
        <p className="text-xl text-green-400 font-sans">THE BEST PRODUCTS</p>
        <h1 className="text-3xl md:text-5xl text-gray-700 font-bold mb-4">
          Discovery Category
        </h1>
        <p className="text-sm md:text-base text-gray-700 font-serif max-w-2xl md:max-w-3xl mx-auto leading-relaxed mb-7">
          We ship healthy potted plants right to your doorstep. Each plant comes
          with simple care instructions, a money back guarantee, and direct
          access to our plant experts to answer questions. Our goal is to make
          the experience of being a plant parent as wonderful as plants
          themselves.
        </p>
        <button className=" btn btn-soft btn-success  font-semibold text-gray-900 bg-emerald-300"> Learn More <span className="font-extrabold text-4xl text-center"> → </span></button> 
      </div>

      {/* Grid of Plants */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {plants.map((p) => (
          <PlantCard key={p.plantId} p={p} />
        ))}
      </div>
    </div>
  );
};

export default Plants;
