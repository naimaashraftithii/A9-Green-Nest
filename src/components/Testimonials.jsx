import React from "react";

const testimonials = [
  {
    text:
      "Excellent. The plants arrived on time and in excellent condition. Very happy with the delivery.",
    name: "Jont Herry",
    role: "Webdesign",
    img: "https://i.pravatar.cc/80?img=31",
  },
  {
    text:
      "Great range of plants. High quality and well packaged. Arrived on time — made an excellent gift!",
    name: "Marry Mell",
    role: "CEO",
    img: "https://i.pravatar.cc/80?img=32",
  },
  {
    text:
      "Second purchase: easy to order and prompt delivery of well wrapped items. Highly recommended.",
    name: "Natasa Aziz",
    role: "Web Design",
    img: "https://i.pravatar.cc/80?img=33",
  },
];

export default function Testimonials() {
  return (
    <section className="py-10 pt-5 w-auto bg-emerald-100">

      <p className="text-center pacifico-regular pb-2 text-emerald-600 uppercase tracking-wider text-sm">
        Love client say
      </p>
      <h2 className="text-6xl md:text-4xl font-serif font-bold text-gray-800 text-center">
        Our Testimonials
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {testimonials.map((t, i) => (
          <figure key={i} className="bg-white rounded-xl p-6 shadow-sm">
            <blockquote className="text-gray-700 leading-relaxed">
              “ {t.text} ”
            </blockquote>
            <figcaption className="flex items-center gap-3 mt-4">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={t.img}
                alt={t.name}
              />
              <div>
                <div className="font-semibold text-gray-800">{t.name}</div>
                <div className="text-sm font-bold pacifico-regular text-amber-400">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
