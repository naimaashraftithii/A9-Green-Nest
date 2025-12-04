import React from "react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Ariana Bloom",
    role: "Founder & Plant Lover",
    img: "https://i.pravatar.cc/80?img=36",
    bio: "Leads GreenNest with a mission to bring a little piece of forest into every home.",
  },
  {
    name: "Noah Green",
    role: "Head Gardener",
    img: "https://i.pravatar.cc/80?img=35",
    bio: "Specialist in indoor plants and balcony gardens, making any space feel alive.",
  },
  {
    name: "Layla Fern",
    role: "Customer Happiness",
    img: "https://i.pravatar.cc/80?img=34",
    bio: "Helps our community choose the right plants and keeps every customer smiling.",
  },
];

const AboutUs = () => {
  return (
    <main className="bg-emerald-50 dark:bg-slate-950 min-h-screen text-gray-900 dark:text-slate-100">
      {/* HERO */}
      <section className="relative w-full h-[60vh] md:h-[65vh] lg:h-[70vh] overflow-hidden">
        <img
          src="https://i.ibb.co.com/4RNhcsLG/5db648de248cd4eb906cf00603e2fcbc.jpg"
          alt="Happy person surrounded by nature"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/20" />

        <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Left text */}
          <div className="w-full md:w-1/2 text-white space-y-4 md:space-y-6">
            <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-emerald-200">
              About GreenNest
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Together, we can
              <br />
              <span className="text-emerald-300">heal the Earth</span>
            </h1>
            <p className="text-sm md:text-base text-gray-100/90 max-w-md">
              GreenNest started with a simple idea: if we make it easy to bring
              plants home, we quietly make the planet a little healthier—one
              balcony, desk and window at a time.
            </p>
            <Link
              to="/services"
              className="btn btn-warning px-6 rounded-full mt-2"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Right */}
          <div className="hidden md:block md:w-1/2" />
        </div>
      </section>

      {/* FEATURE */}
      <section className="relative -mt-12 md:-mt-16 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-4 md:grid-cols-3 bg-[#3c2a1a] rounded-2xl overflow-hidden shadow-lg">
            {[
              {
                title: "Save Our Forest",
                text: "We carefully source from eco-friendly nurseries and support reforestation projects.",
              },
              {
                title: "Save Our Water",
                text: "Our care guides focus on low-waste watering and long-lasting soil mixes.",
              },
              {
                title: "Recycling Is a Must",
                text: "We promote recycled pots, packaging and plastic-free deliveries where possible.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 md:p-7 text-center text-emerald-50 border-b md:border-b-0 md:border-r border-[#4c3620]"
              >
                <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 text-xl">
                  {i === 0 ? "🌲" : i === 1 ? "💧" : "♻️"}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-emerald-200">
                  {item.title}
                </h3>
                <p className="text-sm text-emerald-100/90">{item.text}</p>
                <Link
                  to="/services"
                  className="mt-3 inline-block text-xs font-semibold tracking-wide text-emerald-300 hover:text-emerald-100"
                >
                  LEARN MORE
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-emerald-600 dark:text-emerald-300 uppercase tracking-widest text-xs mb-2">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-slate-50 mb-4">
              Growing a greener tomorrow, together.
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              From a tiny balcony full of experimental pots to a community of
              thousands of plant lovers, GreenNest has always been about
              curiosity, care and connection.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We hand-pick each plant, write friendly care notes, and support
              beginners so they feel confident from day one. Because when your
              plants thrive, you feel a little brighter too.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://i.ibb.co.com/8DwFsSGt/227bd3725bd69da935d683b189328336.jpg"
                alt="Plants in a cozy room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md h-32">
                <img
                  src="https://i.ibb.co.com/TxgD3kwm/6782c727657bb53bb8d9ec1ea2e9ba3a.jpg"
                  alt="Plant shelves"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md h-32">
                <img
                  src="https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Happy people with plants"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="py-12 md:py-16 bg-emerald-100 dark:bg-slate-900">
        <p className="text-center pacifico-regular pb-2 text-emerald-600 dark:text-emerald-300 uppercase tracking-wider text-sm">
          Meet the people behind GreenNest
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 dark:text-slate-50 text-center">
          Our Team
        </h2>

        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {teamMembers.map((m, i) => (
            <figure
              key={i}
              className="
                group relative overflow-hidden border-2 border-green-300 rounded-2xl p-6
                bg-gray-100 dark:bg-slate-800 backdrop-blur-sm
                shadow-sm transition-all duration-300 hover:bg-lime-100 dark:hover:bg-slate-700
                hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01]
              "
            >
              <span
                className="
                  pointer-events-none absolute inset-0 rounded-2xl
                  ring-0 ring-emerald-300/0 group-hover:ring-8 group-hover:ring-emerald-300/20
                  transition-all duration-300
                "
              />
              <span
                className="
                  pointer-events-none absolute -top-24 -right-24 h-48 w-48
                  bg-gradient-to-br from-emerald-300/10 via-teal-300/10 to-cyan-300/10
                  rounded-full blur-2xl opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                "
              />

              <blockquote
                className="
                  relative z-10 text-gray-700 dark:text-gray-200 leading-relaxed mt-4
                  transition-transform duration-300 group-hover:-translate-y-0.5
                "
              >
                {m.bio}
              </blockquote>

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
                    src={m.img}
                    alt={m.name}
                  />
                </div>

                <div className="transition-transform duration-300 group-hover:translate-x-0.5">
                  <div className="font-semibold text-gray-800 dark:text-slate-50">
                    {m.name}
                  </div>
                  <div className="text-sm font-bold pacifico-regular text-amber-400">
                    {m.role}
                  </div>
                </div>
              </figcaption>

              <style>{`
                .group:hover {
                  transform: perspective(900px) rotateX(0.6deg) rotateY(-0.6deg) scale(1.01);
                }
              `}</style>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
