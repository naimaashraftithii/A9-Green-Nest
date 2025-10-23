import React, { useEffect, useState } from "react";
import PlantCard from "../components/PlantCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Home = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plantsdata.json").then(r => r.json()).then(setPlants);
  }, []);

  const topRated = [...plants].sort((a,b)=>b.rating-a.rating).slice(0,4);

  return (
    <div className="container mx-auto space-y-16 py-8">
      {/* Hero (Swiper) */}
      <section>
        <Swiper loop autoplay={{delay: 2500}}>
          {["Bring Nature Home", "Healthy Plants, Happy Homes", "Care • Decor • Thrive"].map((t,i)=>(
            <SwiperSlide key={i}>
              <div className="h-64 md:h-80 bg-green-100 rounded-2xl flex items-center justify-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-green-700">{t}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Top Rated Indoor Plants */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Top Rated Indoor Plants</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topRated.map(p => <PlantCard key={p.plantId} p={p} />)}
        </div>
      </section>

      {/* Plant Care Tips */}
      <section className="grid md:grid-cols-3 gap-6">
        {[{
          title:"Watering", text:"Water when top 1–2 inches of soil is dry."
        },{
          title:"Sunlight", text:"Bright, indirect light suits most indoor plants."
        },{
          title:"Fertilizing", text:"Feed monthly in growing season."
        }].map((tip,i)=>(
          <div key={i} className="p-5 rounded-xl bg-base-200">
            <h3 className="font-semibold">{tip.title}</h3>
            <p className="opacity-80">{tip.text}</p>
          </div>
        ))}
      </section>

      {/* Meet Our Green Experts */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Meet Our Green Experts</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {n:"Ava Leaf", s:"Soil & Watering"},
            {n:"Milo Fern", s:"Low-Light Plants"},
            {n:"Ivy Bloom", s:"Flowering Care"},
            {n:"Rio Moss", s:"Indoor Styling"},
          ].map((e,i)=>(
            <div key={i} className="p-5 rounded-xl bg-base-100 shadow text-center">
              <img className="w-24 h-24 mx-auto rounded-full object-cover" src={`https://i.pravatar.cc/150?img=${20+i}`} />
              <h4 className="font-semibold mt-2">{e.n}</h4>
              <p className="text-sm opacity-80">{e.s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Extra: Plant of the Week */}
      <section className="p-6 rounded-2xl bg-green-50">
        <h2 className="text-2xl font-bold mb-2">🌿 Plant of the Week: Monstera</h2>
        <p className="opacity-80">Iconic split leaves that love bright, indirect light.</p>
      </section>
    </div>
  );
};

export default Home;
