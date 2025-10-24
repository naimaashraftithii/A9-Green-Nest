import React from "react";

const tips = [
  {
    title: "Watering",
    text:
      "Water when the top 1–2 inches of soil feel dry. Reduce in winter and avoid soggy pots.",
    icon: "💧",
  },
  {
    title: "Sunlight",
    text:
      "Most indoor plants like bright, indirect light. Rotate pots weekly for even growth.",
    icon: "☀️",
  },
  {
    title: "Fertilizing",
    text:
      "Feed monthly during spring–summer with a balanced liquid fertilizer, skip in winter.",
    icon: "🌿",
  },
];

export default function PlantCareTips() {
  return (
    <section className="rounded-2xl bg-emerald-50 border text-center border-emerald-100 p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
        Plant Care Tips
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mt-2">
        Simple rules for watering, sunlight, and fertilizing to keep your plants thriving.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {tips.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-6xl pb-2 hover: text-emerald-700">{t.icon}</div>
            <h3 className="mt-2 font-semibold text-gray-800">{t.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
