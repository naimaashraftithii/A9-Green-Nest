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
    <section className="py-12 bg-emerald-100">
      <p className="text-center pacifico-regular pb-2 text-emerald-600 uppercase tracking-wider text-sm">
        Love client say
      </p>
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 text-center">
        Our Testimonials
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="
              group relative overflow-hidden border-2 border-green-300 rounded-2xl p-6
              bg-gray-100 backdrop-blur-sm
              shadow-sm transition-all duration-300 hover:bg-lime-100
              hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01]
            "
          >
            {/* border hover ring */}
            <span
              className="
                pointer-events-none absolute inset-0 rounded-2xl
                ring-0 ring-emerald-300/0 group-hover:ring-8 group-hover:ring-emerald-300/20
                transition-all duration-300
              "
            />

            {/*corner gradient */}
            <span
              className="
                pointer-events-none absolute -top-24 -right-24 h-48 w-48
                bg-gradient-to-br from-emerald-300/10 via-teal-300/10 to-cyan-300/10
                rounded-full blur-2xl opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "
            />
           <div className="border-2 shadow-2xl">
            {/* open quote */}
            <div className="absolute top-3 left-4 text-7xl text-emerald-400/20 group-hover:text-emerald-400/30 font-serif select-none">
              ❝
            </div>

            {/* content */}
            <blockquote
              className="
                relative z-10 text-gray-700 leading-relaxed mt-8
                transition-transform duration-300 group-hover:translate-y-[-2px]
              "
            >
              {t.text}
              {/* close quote*/}
              <span className="text-7xl text-emerald-400/20 float-right translate-y-[-10px]">
               ❞
              </span>
            </blockquote>

           </div>
            
            {/* user-info */}
            <figcaption className="flex items-center gap-3 mt-5">
              <div
                className="
                  relative rounded-full p-[2px]
                  bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400
                  transition-transform duration-300 group-hover:rotate-3
                "
              >
                <img
                  className="w-10 h-10 rounded-full object-cover bg-white"
                  src={t.img}
                  alt={t.name}
                />
              </div>

              <div className="transition-transform duration-300 group-hover:translate-x-[2px]">
                <div className="font-semibold text-gray-800">{t.name}</div>
                <div className="text-sm font-bold pacifico-regular text-amber-400">
                  {t.role}
                </div>
              </div>
            </figcaption>

            {/*hover */}
            <style>{`
              .group:hover {
                transform: perspective(900px) rotateX(0.6deg) rotateY(-0.6deg) scale(1.01);
              }
            `}</style>
          </figure>
        ))}
      </div>
    </section>
  );
}
