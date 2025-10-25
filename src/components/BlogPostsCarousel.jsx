// src/components/BlogPostsCarousel.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const posts = [
  {
    date: "February 27, 2025",
    author: "G5plusacc",
    title: "Post Format Link",
    excerpt:
      "Golden rules for watering your plants. Keep these on hand when watering.",
    img: "https://i.ibb.co.com/MDkZDNYR/f5b2981b659c1eddb3779e6375efbb4d.jpg",
  },
  {
    date: "January 10, 2025",
    author: "G5plusacc",
    title: "Audio Post Example",
    excerpt:
      "If it’s rained for a couple of days, lay off watering; make sure planters drain well.",
    img: "https://i.ibb.co.com/4R3mJL8n/8d8a7f2433089b29fe61b8d543b9dcef.jpg",
  },
  {
    date: "February 15, 2025",
    author: "G5plusacc",
    title: "Season-Care: Spring",
    excerpt:
      "All things spring: how and when to adjust plant care as the temperature warms up.",
    img: "https://images.unsplash.com/photo-1459664018906-085c36f472af?q=80&w=1600&auto=format&fit=crop",
  },
  {
    date: "May 10, 2025",
    author: "G5plusacc",
    title: "Soil 101: Quick Wins",
    excerpt:
      "Simple tweaks that give your plants the perfect start and steady growth.",
    img: "https://i.ibb.co.com/YFHcYvCJ/aa0915a3968f396aec2a563287496dbe.jpg",
  },
  {
    date: "April 15, 2025",
    author: "G5plusacc",
    title: "Season-Care: Spring",
    excerpt:
      "All things spring: how and when to adjust plant care as the temperature warms up.",
    img: "https://i.ibb.co.com/vW3Vw4L/80890af997dd2d793d6003259566cb2b.jpg",
  },
];

export default function BlogPostsCarousel() {
  return (
    <section className="pt-4">
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-emerald-600 pacifico-regular uppercase tracking-wider font-bold text-sm">
          Love Story
        </p>
        <h2 className="text-4xl md:text-4xl font-serif font-bold text-gray-800">
          From our blogs
        </h2>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 1.2,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        spaceBetween={28}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.4 },
          1024: { slidesPerView: 2.2 },
          1280: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {posts.map((p, i) => (
          <SwiperSlide key={i}>
            <article className="group relative bg-white rounded-2xl overflow-hidden shadow transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
              {/* image */}
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* gradient overlay reveal */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* floating date badge */}
                <div
              className="absolute top-3 left-3 font-bold
             bg-gradient-to-r from-[#fc6767] via-[#ec008c] to-[#f27121] 
             text-white text-xs px-3 py-1 rounded-full shadow-md 
             transform transition-all duration-500 
             group-hover:-translate-y-1 group-hover:scale-105">
              {p.date} </div>
              </div>

              {/* content */}
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-[13px] text-emerald-700/80">
                  {p.author}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-emerald-700">
                  {p.title}
                </h3>
                <p className="text-gray-600 mt-1 flex-1">{p.excerpt}</p>

                <Link
                  to="#"
                  className="inline-flex items-center gap-2 text-emerald-700 mt-3 transition-all duration-300 group/link"
                >
                  <span className="relative">
                    Read more
                    <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-emerald-600 transition-all duration-300 group-hover/link:w-full" />
                  </span>
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              {/* subtle glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -inset-1 rounded-2xl blur-xl bg-emerald-500/10" />
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
