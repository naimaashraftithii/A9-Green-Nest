import React from "react";
import { FaAward, FaDraftingCompass, FaStar, FaShoppingCart } from "react-icons/fa";

const services = [
  {
    icon: <FaAward className="text-5xl text-emerald-600 mx-auto mb-4" />,
    title: "INTERIOR PLANT SERVICE",
    desc: "This item includes installation and maintenance.",
  },
  {
    icon: <FaDraftingCompass className="text-5xl text-emerald-600 mx-auto mb-4" />,
    title: "INTERIOR LANDSCAPING DESIGN",
    desc: "We offer a complete range of design services.",
  },
  {
    icon: <FaStar className="text-5xl text-emerald-600 mx-auto mb-4" />,
    title: "SEASON HOLIDAY DECORATING",
    desc: "We have a lot of creative & easy decorating ideas.",
  },
  {
    icon: <FaShoppingCart className="text-5xl text-emerald-600 mx-auto mb-4" />,
    title: "LANDSCAPING PRODUCTS",
    desc: "We have a wide range of landscaping products.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white text-center">
      {/* Title */}
      <div className="mb-12">
        <p className="text-teal-500 font-semibold mb-1 pacifico-regular">Exclusive</p>
        <h2 className="text-4xl font-extrabold text-gray-800 tracking-wide">
          OUR SERVICES
        </h2>
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div key={i} className="flex flex-col items-center group">
            <div className="bg-gray-100 w-28 h-28 rounded-full flex items-center justify-center mb-6 
            transition-transform duration-300 hover:bg-emerald-200 group-hover:scale-110">
              {service.icon}
            </div>
            <h3 className="text-lg font-extrabold text-gray-800 mb-2">
              {service.title}
            </h3>
            <div className="w-8 h-1 bg-teal-400 rounded-full mb-3"></div>
            <p className="text-sm text-gray-600 w-3/4">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-12">
        <button className="bg-teal-500 hover:bg-indigo-800 text-white font-semibold px-8 py-3 rounded-md shadow-md transition">
          VIEW ALL
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
