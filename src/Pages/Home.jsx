import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import PlantCard from "../components/PlantCard";
import BlogPostsCarousel from "../components/BlogPostsCarousel";
import Testimonials from "../components/Testimonials";
import PlantCareTips from "../components/PlantCareTips";
import ExpertsGrid from "../components/ExpertsGrid";
import HeroParallaxCarousel from "../components/HeroParallaxCarousel";
import ServicesSection from "../components/ServicesSection";
import BestOffers from "../components/BestOffers";
import SpringHistory from "../components/SpringHistory";
import PageSection from "../layout/PageSection";


const EcoDecorIdeas = () => (
  <div className="p-6 rounded-2xl text-center bg-emerald-200 dark:bg-emerald-900/50 hover:bg-emerald-100 dark:hover:bg-emerald-800 transform transition-colors">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-black dark:text-emerald-100 italic mb-2 pacifico-regular">
      Eco Decor Ideas
    </h2>
    <p className="text-sm md:text-base text-gray-700 dark:text-gray-200 font-serif max-w-2xl md:max-w-3xl mx-auto leading-relaxed mb-7">
      It’s true when we say plants make people happy. We hope you’ll make any one of these
      plants an addition to your home.
    </p>

    <div className="grid md:grid-cols-3 gap-6 text-gray-600 dark:text-gray-100">
      {[
        {
          title: "Shelf Styling",
          text: "Mix trailing pothos with books and candles for a cozy vignette.",
          imgs: [
            "https://i.ibb.co/8DwFsSGt/227bd3725bd69da935d683b189328336.jpg",
            "https://i.ibb.co/xrLZ7Zy/e58d18c53593979e45fe7ff56848a261.jpg",
          ],
        },
        {
          title: "Entryway Statement",
          text: "Use a rubber plant in a textured pot to greet guests with green.",
          imgs: [
            "https://i.ibb.co/xq9f6p9C/cb33642c0217fe8e3616083c39ac6e71.jpg",
            "https://i.ibb.co/Ng7hQyTc/dcfb360292c41d5b3d40a880ca3e8c87.jpg",
          ],
        },
        {
          title: "Bedroom Calm",
          text: "Snake plant + neutral linens = fresh air and better sleep vibes.",
          imgs: [
            "https://i.ibb.co/9CnjgHs/d4af642d529ecbf680f745edd76dda5a-1.jpg",
            "https://i.ibb.co/XZrDc4kp/23a26ecc3ab3a9d5b51fdaf896df2485.jpg",
          ],
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="rounded-xl overflow-hidden bg-blue-50 dark:bg-slate-800 shadow hover:shadow-lg transition-all duration-300"
        >
          <div className="flex gap-2 p-2 bg-white dark:bg-slate-900">
            {item.imgs.map((src, i) => (
              <div key={i} className="flex-1 overflow-hidden rounded-lg border-2 border-white dark:border-slate-800">
                <img
                  src={src}
                  alt={item.title}
                  className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-gray-800 dark:text-slate-50">
              {item.title}
            </h3>
            <p className="text-sm opacity-80">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Home = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("/plantsdata.json")
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => setPlants(data))
      .catch((e) => setErr(e))
      .finally(() => setLoading(false));
  }, []);

  const topRated = useMemo(
    () => [...plants].sort((a, b) => b.rating - a.rating).slice(0, 8),
    [plants]
  );

  if (loading) return <Loader label="Loading plants..." />;
  if (err) return <ErrorState message={err.message} onRetry={() => location.reload()} />;

  return (
    <>
      {/* Hero Carousel full width */}
      <HeroParallaxCarousel />
      <SpringHistory />

      
      <PageSection>
        {/* Top Rated section */}
        <section>
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-3">
            <h2 className="text-3xl text-gray-800 dark:text-slate-50 font-bold">
              Top Rated Indoor Plants
            </h2>

            <Link
              to="/plants"
              className="btn relative overflow-hidden bg-linear-to-r from-[#8a2387] via-[#e94057] via-[#ec008c] to-[#f27121]
                         text-white font-semibold shadow-md border-none transition-all duration-300 ease-out
                         hover:scale-[1.08] hover:shadow-xl hover:brightness-110 group"
            >
              <span className="relative z-10 flex items-center">
                View All
                <span className="ml-2 text-2xl font-extrabold transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
              <span className="absolute inset-0 bg-linear-to-r from-[#fc6767] via-[#ec008c] to-[#f27121] opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-500" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {topRated.map((p) => (
              <PlantCard key={p.plantId} p={p} />
            ))}
          </div>
        </section>
      </PageSection>

      <PageSection>
        <BestOffers />
      </PageSection>

      <PageSection>
        <EcoDecorIdeas />
      </PageSection>

      <PageSection>
        <PlantCareTips />
      </PageSection>

      <PageSection>
        <BlogPostsCarousel />
      </PageSection>

      <PageSection>
        <Testimonials />
      </PageSection>

      <PageSection>
        <ServicesSection />
      </PageSection>

      <PageSection>
        <ExpertsGrid />
      </PageSection>
    </>
  );
};

export default Home;
