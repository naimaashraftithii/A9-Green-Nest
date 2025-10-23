import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/pagination";

// Slides
const slides = [
  {
    img: "https://i.ibb.co/MDkZDNYR/f5b2981b659c1eddb3779e6375efbb4d.jpg",
    title: "Bring Nature Home",
    text: "Everything that slows us down and forces patience, everything that sets us back into the slow circles of nature, is a help. Gardening is an instrument of grace.",
    subtitle: "— May Sarton",
  },
  {
    img: "https://i.ibb.co.com/Y4Ws2btb/slide1-25.jpg",
    title: "Healthy Plants, Happy Homes",
    text: "In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they’re still beautiful.",
    subtitle: "— Alice Walker",
  },
  {
    img: "https://i.ibb.co/fYQMFxVR/e7dbd673df7e98e772026323b5bb91f5.jpg",
    title: "Sunlight • Water • Love",
    text: "Trees exhale for us so that we can inhale them to stay alive. Can we ever forget that? Let us love trees with every breath we take until we perish.",
    subtitle: "— Munia Khan",
  },
  {
    img: "https://i.ibb.co.com/4R3mJL8n/8d8a7f2433089b29fe61b8d543b9dcef.jpg",
    title: "Decor That Grows On You",
    text: "Everything that slows us down and forces patience, everything that sets us back into the slow circles of nature, is a help. Gardening is an instrument of grace.",
    subtitle: "— May Sarton",
  },
  {
    img: "https://i.ibb.co.com/RkjVHbtZ/953c87670b9c9e822f23e0ed30e6a891.jpg",
    title: "Bring Nature Home",
    text: "Everything that slows us down and forces patience, everything that sets us back into the slow circles of nature, is a help. Gardening is an instrument of grace.",
    subtitle: "— May Sarton",
  },
  {
    img: "https://i.ibb.co.com/fYQMFxVR/e7dbd673df7e98e772026323b5bb91f5.jpg",
    title: "Healthy Plants, Happy Homes",
    text: "In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they’re still beautiful.",
    subtitle: "— Alice Walker",
  },
  {
    img: "https://i.ibb.co.com/MDkZDNYR/f5b2981b659c1eddb3779e6375efbb4d.jpg",
    title: "Book a Plant Expert",
    text: "There is no gardening without humility. Nature is constantly sending even its oldest scholars to the bottom of the class for some egregious blunder.",
    subtitle: "— Alfred Austin",
  },
];

const HeroParallaxCarousel = () => {
  return (
    <section className="w-full overflow-hidden">
      <Swiper
        modules={[Parallax, Pagination, Autoplay]}
        speed={700}
        parallax
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[640px] xl:h-[720px]"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
              {/* Full-width responsive image */}
              <img
                data-swiper-parallax="-20%"
                src={s.img}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-90 transition-all duration-700"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />

              {/* Centered text box */}
              <div className="relative flex items-center justify-center h-full px-4 sm:px-6 md:px-10">
                <div
                  className="max-w-3xl mx-auto text-white bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 md:p-10 text-center shadow-lg transition-transform duration-500 hover:scale-105"
                  data-swiper-parallax="-300"
                >
                  <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold mb-3">
                    {s.title}
                  </h2>

                  <p
                    className="text-white/85 text-sm sm:text-base md:text-lg mb-3 leading-relaxed"
                    data-swiper-parallax="-120"
                  >
                    {s.text}
                  </p>

                  <p
                    className="font-semibold text-green-200 text-sm sm:text-base"
                    data-swiper-parallax="-200"
                  >
                    {s.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroParallaxCarousel;
