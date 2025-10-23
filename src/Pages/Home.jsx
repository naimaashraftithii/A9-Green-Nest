import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PlantCard from "../components/PlantCard";

const EcoDecorIdeas = () => (
  <section className="p-6 rounded-2xl bg-green-50">
    <h2 className="text-2xl font-bold text-amber-900 mb-4"> Eco Decor Ideas</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          title: "Shelf Styling",
          text: "Mix trailing pothos with books and candles for a cozy vignette.",
          img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        },
        {
          title: "Entryway Statement",
          text: "Use a rubber plant in a textured pot to greet guests with green.",
          img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
        },
        {
          title: "Bedroom Calm",
          text: "Snake plant + neutral linens = fresh air and better sleep vibes.",
          img: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop",
        },
      ].map((i, idx) => (
        <div
          key={idx}
          className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-all duration-300"
        >
          <img src={i.img} alt={i.title} className="h-40 w-full object-cover" />
          <div className="p-4">
            <h3 className="font-semibold">{i.title}</h3>
            <p className="text-sm opacity-80">{i.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Home = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plantsdata.json")
      .then((r) => r.json())
      .then(setPlants)
      .catch(console.error);
  }, []);

  const topRated = [...plants].sort((a, b) => b.rating - a.rating).slice(0, 8);

  return (
    <div className="container mx-auto space-y-16 py-8 px-4">
      {/* --- Top Rated Section --- */}
      <section>
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
          <h2 className="text-3xl text-gray-800 font-bold mb-3 sm:mb-0">
            Top Rated Indoor Plants
          </h2>

          {/* View All Button (Link to /plants) */}
  <Link
  to="/plants"
  className="btn relative overflow-hidden 
  bg-gradient-to-r from-[#8a2387] via-[#e94057] via-[#ec008c] to-[#f27121]
  text-white font-semibold shadow-md border-none
  transition-all duration-300 ease-out
  hover:scale-[1.08] hover:shadow-xl hover:brightness-110 group"
>
  <span className="relative z-10 flex items-center">
    View All
    <span className="ml-2 text-2xl font-extrabold transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </span>

  {/* glowing hover overlay */}
  <span className="absolute inset-0 bg-gradient-to-r from-[#fc6767] via-[#ec008c] to-[#f27121] opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-500"></span>
</Link>


        </div>

        {/* Plant Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {topRated.map((p) => (
            <PlantCard key={p.plantId} p={p} />
          ))}
        </div>
      </section>

      {/* --- Eco Decor Ideas Section --- */}
      <EcoDecorIdeas />
    </div>
  );
};

export default Home;
