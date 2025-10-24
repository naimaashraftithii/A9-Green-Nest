import React from "react";

const experts = [
  { name: "Ava Leaf", spec: "Soil & Watering", img: "https://i.pravatar.cc/150?img=20" },
  { name: "Milo Fern", spec: "Low-Light Plants", img: "https://i.pravatar.cc/150?img=21" },
  { name: "Ivy Bloom", spec: "Flowering Care", img: "https://i.pravatar.cc/150?img=22" },
  { name: "Rio Moss", spec: "Indoor Styling", img: "https://i.pravatar.cc/150?img=23" },
];

export default function ExpertsGrid() {
  return (
    <section className="rounded-2xl bg-white ">
       <div className="text-center pt-10 mb-2.5 ">
        <p className="text-2xl font-extrabold text-emerald-400 pacifico-regular">WHO ARE WE ?</p>
         <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
        Meet Our Green Experts
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mt-2">
        Real people, real advice — book a session or read their tips.
      </p>
       </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {experts.map((e, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-emerald-50/50 border border-emerald-100 text-center hover:shadow-md transition-shadow"
          >
            <img
              className="w-24 h-24 mx-auto rounded-full object-cover ring-2 ring-emerald-200"
              src={e.img}
              alt={e.name}
            />
            <h4 className="font-semibold mt-3 text-gray-800">{e.name}</h4>
            <p className="text-sm text-gray-600">{e.spec}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
