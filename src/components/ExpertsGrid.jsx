import React from "react";

const experts = [
  { name: "Ava Leaf", spec: "Soil & Watering", img: "https://i.ibb.co.com/FqzMBtg7/3d41738232fcb04d7fe6f6de9c539080.jpg" },
  { name: "Milo Fern", spec: "Low-Light Plants", img: "https://i.pravatar.cc/150?img=21" },
  { name: "Ivy Bloom", spec: "Flowering Care", img: "https://i.ibb.co.com/C3KRFGZk/f26337907cce687a3fbfed7f13651975.jpg" },
  { name: "Rio Moss", spec: "Indoor Styling", img: "https://i.pravatar.cc/150?img=23" },
];

export default function ExpertsGrid() {
  return (
    <section className="rounded-2xl bg-white pb-12">
      {/* Header */}
      <div className="text-center pt-10 mb-4">
        <p className="text-2xl font-extrabold text-emerald-400 pacifico-regular">
          WHO ARE WE ?
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Meet Our Green Experts
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mt-2">
          Real people, real advice — book a session or read their tips.
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 px-6 md:px-10">
        {experts.map((e, i) => (
          <div
            key={i}
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 
            text-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.04]"
          >
            {/* Subtle rotating glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-green-200/40 via-yellow-200/30 to-pink-200/40 blur-2xl rounded-2xl -z-10"></div>

            {/* Avatar */}
            <div className="relative inline-block">
              <img
                className="w-24 h-24 mx-auto rounded-full object-cover ring-4 ring-emerald-400 shadow-md transition-all duration-500 group-hover:ring-pink-400 group-hover:scale-110 group-hover:rotate-6"
                src={e.img}
                alt={e.name}
              />
            </div>

            {/* Text */}
            <h4 className="font-semibold mt-4 text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">
              {e.name}
            </h4>
            <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              {e.spec}
            </p>

            {/* Glow underline animation */}
            <span className="block mt-3 mx-auto w-0 group-hover:w-20 h-0.5 bg-gradient-to-r from-emerald-400 to-pink-400 transition-all duration-500"></span>
          </div>
        ))}
      </div>
    </section>
  );
}
