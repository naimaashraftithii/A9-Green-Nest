// src/Pages/Home.jsx
import React, { useEffect, useState } from "react";
import PlantCard from "../components/PlantCard";
import HeroParallaxCarousel from "../components/HeroParallaxCarousel";

const Home = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plantsdata.json")
      .then((r) => r.json())
      .then(setPlants)
      .catch(() => setPlants([]));
  }, []);

  const topRated = [...plants].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
   <div className="container mx-auto px-3 md:px-4 py-8 space-y-12">
      <HeroParallaxCarousel />

      {/* Top Rated Indoor Plants */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Top Rated Indoor Plants</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topRated.map((p) => (
            <PlantCard key={p.plantId} p={p} />
          ))}
        </div>
      </section>

      {/* Tips / Experts / Extras … (your existing sections can stay here) */}
    </div>
  );
};

export default Home;
