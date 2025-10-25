
import React from "react";
import { Link } from "react-router-dom";



const offers = [
  {
    title: "Pets Friendly Plants",
    subtitle: "We Deliver a lot of",
    desc: "A lot of houseplants that are safe for pets",
    img: "https://i.ibb.co.com/202Yf83v/19b168c1798c2fb8b024ce1fe957d929.jpg",
  },
  {
    title: "Office Plant Guide",
    subtitle: "Use It Today",
    desc: "We’re pleased to offer a wide range of easy-care houseplants and low-maintenance office plants.",
    img: "https://i.ibb.co.com/vW3Vw4L/80890af997dd2d793d6003259566cb2b.jpg",
    cta: { label: "Download Now", to: "/guide" },
  },
  {
    title: "PLANTS RANGE",
    subtitle: "Hot Deal",
    img: "https://i.ibb.co.com/8DwFsSGt/227bd3725bd69da935d683b189328336.jpg",
    cta: { label: "Order Now", to: "/shop" },
  },
  {
    title: "Choose Your Plant",
    subtitle: "Buy It",
    img: "https://i.ibb.co.com/YFHcYvCJ/aa0915a3968f396aec2a563287496dbe.jpg",
  },
];

function BannerCard({ item, size = "sm", align = "left" }) {
  const height =
    size === "lg"
      ? "h-[18rem] sm:h-[22rem] lg:h-[26rem]"
      : size === "tall"
      ? "h-[35rem] sm:h-[40rem] lg:h-[47rem]" 
      : "h-[14rem] sm:h-[16rem] lg:h-[18rem]";

  const alignBox =
    align === "left"
      ? "items-start text-left"
      : align === "center"
      ? "items-center text-center"
      : "items-end text-right";

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl ${height}
        shadow transition-all duration-500 hover:shadow-2xl hover:-translate-y-0.5`}
    >
      {/* Background image */}
      <img
        src={item.img}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
        loading="lazy"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      {/* Light sweep */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[120%] group-hover:translate-x-[120%] duration-[1200ms]" />
      </div>

      {/* Content */}
      <div className={`relative z-10 h-full w-full p-6 sm:p-8 flex ${alignBox} justify-end`}>
        <div className="max-w-md text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          {item.subtitle && (
            <p className="pacifico-regular text-white/90 text-lg sm:text-xl mb-1">
              {item.subtitle}
            </p>
          )}

          <h3
            className={`font-extrabold leading-tight ${
              size === "lg" || size === "tall"
                ? "text-3xl sm:text-4xl"
                : "text-2xl"
            }`}
          >
            {item.title}
          </h3>

          {item.desc && (
            <p className="mt-3 text-sm sm:text-base text-white/90">{item.desc}</p>
          )}

          {/* Gradient Button with animation */}
          {item.cta && (
            <Link
              to={item.cta.to}
              className="relative mt-5 inline-flex items-center justify-center px-8 py-3 
                         text-white font-semibold rounded-md overflow-hidden
                         shadow-lg transition-all duration-300 group/button"
            >
              {/* Animated gradient background */}
              <span
                className="absolute inset-0 bg-gradient-to-r from-yellowgreen via-pink-500 to-sky-500 
                           animate-gradient-x opacity-100 group-hover/button:brightness-110 
                           transition-all duration-500"
              ></span>

              {/* Text layer */}
              <span className="relative z-10">{item.cta.label}</span>

              {/* Glow ring */}
              <span className="absolute inset-0 rounded-md ring-2 ring-transparent group-hover/button:ring-white/40 transition-all duration-500"></span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

//gradient animation
const gradientAnimation = `
@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 3s ease infinite;
}
`;

const BestOffers = () => {
  return (
    <>
      <style>{gradientAnimation}</style>
      <section className="py-16 bg-white">
        {/* Title */}
        <div className="text-center mb-10">
          <p className="text-teal-600 pacifico-regular text-lg">Hot Offers</p>
          <h2 className="text-[2.1rem] sm:text-4xl font-extrabold text-[#4b3426] tracking-wide uppercase">
            Our Best Offers - Plant of the Week
          </h2>
        </div>

        {/* Grid */}
        <div className="max-w-[1150px] mx-auto grid gap-7 md:grid-cols-3 px-4">
          {/* Left column  */}
          <div className="md:col-span-2 grid gap-7">
            <BannerCard item={offers[0]} size="lg" align="left" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              <BannerCard item={offers[2]} size="sm" align="left" />
              <BannerCard item={offers[3]} size="sm" align="left" />
            </div>
          </div>

          {/* Right side  */}
          <BannerCard item={offers[1]} size="tall" align="left" />
        </div>
      </section>
    </>
  );
};

export default BestOffers;
