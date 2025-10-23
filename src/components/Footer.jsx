import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import logo from "../assets/logo1.png";

const Footer = () => (
  <footer className="bg-linear-to-br from-green-50 via-emerald-50 to-green-100 text-gray-800 mt-20 pt-12 rounded-t-3xl shadow-inner">
    {/*Newsletter Section */}
   <section
  className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between 
  bg-white/70 backdrop-blur-sm border border-green-200 rounded-2xl px-8 py-10 mb-10 
  shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-green-300 hover:-translate-y-1"
>
  {/* Left */}
  <div className="text-center md:text-left transform transition-all duration-500 hover:translate-x-1">
    <h2 className="relative text-4xl font-bold font-serif text-green-700 mb-2 drop-shadow-sm inline-block">
      🎄 Get 30% Off
      {/* Animated underline */}
      <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-green-500 rounded-full transition-all duration-500 group-hover:w-full"></span>
    </h2>
    <p className="text-gray-600 text-sm md:text-base transition-all duration-300 hover:text-green-700">
      Sign up for our newsletter to stay updated on new arrivals & offers.
    </p>
  </div>

  {/* Right: Newsletter */}
  <form className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3">
    <input
      type="email"
      placeholder="your@email.com"
      className="bg-amber-50 text-gray-700 input input-bordered border-green-300 
      focus:outline-none focus:ring-2 focus:ring-green-400 px-4 py-2 rounded-lg shadow-sm 
      transition-all duration-300 w-64 hover:scale-[1.03] focus:shadow-md focus:border-green-400"
    />
 <button
  type="submit"
  className="btn bg-gradient-to-r from-[#ff512f] to-[#dd2476] animate-gradient
  hover:from-green-600 hover:to-emerald-700
  text-white font-semibold px-6 py-2 rounded-lg shadow-md
  transition-all duration-300 ease-out
  hover:shadow-lg hover:scale-110 active:scale-95"
>
  Subscribe
</button>

  </form>
</section>


    {/* 🌸 Footer Content */}
    <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-10 border-t border-green-200">
      {/* Left: Brand */}
      <div className="text-center md:text-left">
        <img
          src={logo}
          alt="GreenNest logo"
          className="h-12 w-auto mx-auto md:mx-0 drop-shadow-md hover:scale-110 transition-transform duration-300"
        />
        <h3 className="text-2xl font-semibold text-green-700 mt-3">GreenNest</h3>
        <p className="text-sm opacity-80 mt-2 max-w-xs mx-auto md:mx-0">
          Bring nature home — plant care, decor, and inspiration for a greener life.
        </p>
      </div>

      {/* Middle: Quick Links */}
      <div className="text-center md:text-left">
        <h4 className="font-semibold text-lg text-green-800 mb-2">Quick Links</h4>
        <ul className="space-y-2 text-gray-700">
          {["About", "Contact", "Privacy Policy"].map((link) => (
            <li key={link}>
              <Link
                to="#"
                className="relative group transition-all duration-300"
              >
                <span className="group-hover:text-green-600 transition-colors duration-300">
                  {link}
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Social Icons */}
      <div className="text-center md:text-right">
        <h4 className="font-semibold text-lg text-green-800 mb-3">Follow Us</h4>
        <div className="flex justify-center md:justify-end gap-4">
          {[
            { icon: <FaTwitter />, label: "Twitter", color: "bg-blue-500" },
            { icon: <FaInstagram />, label: "Instagram", color: "bg-pink-500" },
            { icon: <FaFacebookF />, label: "Facebook", color: "bg-blue-600" },
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              aria-label={item.label}
              className={`p-3 rounded-full text-white ${item.color} hover:brightness-110 transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg`}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="text-center text-sm text-gray-500 border-t border-green-200 pt-6 pb-4">
      © 2025{" "}
      <span className="text-green-700 font-medium hover:text-green-900 transition-colors duration-300">
        GreenNest
      </span>
      . All rights reserved.
    </div>
  </footer>
);

export default Footer;
