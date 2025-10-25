
import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import { toast } from "react-toastify";
import logo from "../assets/logo1.png";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "").trim();

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }
    if (!isValid) {
      toast.error("That doesn't look like a valid email.");
      return;
    }

    toast.success("🌸 Thanks for subscribing! Stay connected with us. 🌸");
    e.currentTarget.reset();
  };

  return (
    <footer className="relative mt-20 pt-12 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 text-gray-800 rounded-t-3xl shadow-inner overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 h-48 w-48 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-green-300/20 blur-3xl" />

      {/* Newsletter */}
<section
  className="group relative bg-white/70 border border-green-300 rounded-2xl shadow-lg 
  transition-all duration-500 hover:shadow-2xl hover:border-green-500 
  hover:bg-gradient-to-r hover:from-green-50 hover:via-green-200 hover:to-green-100 
  py-10 px-6 md:px-10 mb-10"
>
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
    {/* Left Section small screens)  */}
    <div className="flex-1">
      <h2 className="text-3xl md:text-4xl font-bold font-serif text-green-700 mb-3 drop-shadow-sm transition-colors duration-300 group-hover:text-green-800 text-center md:text-left">
        🎄 Get{" "}
        <span className="text-red-600 text-5xl md:text-6xl text-orange-300 transition-transform duration-300 group-hover:scale-110 inline-block">
          30%
        </span>{" "}
        Off 🎄
      </h2>
      <p className="text-gray-600 text-sm md:text-lg leading-relaxed text-center md:text-left">
        Sign up for our newsletter to stay updated on new arrivals & offers.
      </p>
    </div>

    {/* small screens) */}
    <form
      onSubmit={handleSubscribe}
      className="flex flex-col sm:flex-row items-center justify-center w-full md:w-auto gap-3 text-center"
    >
      <input
        name="email"
        type="email"
        placeholder="your@email.com"
        className="bg-white/80 text-gray-700 border border-green-300 focus:border-green-400 focus:ring-2 focus:ring-green-300 px-4 py-2 rounded-lg shadow-sm transition-all duration-300 w-full sm:w-72 hover:scale-[1.02] focus:shadow-md"
      />
      <button
        type="submit"
        className="relative inline-flex items-center justify-center rounded-lg px-6 py-2 font-semibold text-white transition-all duration-300 
        focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2
        [background:linear-gradient(90deg,#84cc16,#22c55e,#06b6d4,#a855f7,#ec4899,#f59e0b)]
        bg-[length:200%_100%] animate-[moveGradient_4s_linear_infinite]
        hover:scale-105 hover:shadow-lg active:scale-95"
      >
        <span className="relative z-10">Subscribe</span>
        <span className="absolute inset-0 rounded-lg bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </button>
    </form>
  </div>
</section>

<style>{`
  @keyframes moveGradient {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }
`}</style>



{/* Footer Content */}
<div className="container mx-auto px-6 py-10 grid md:grid-cols-4 gap-10 border-t border-green-200">
 
</div>

      

      {/* Footer Main  */}
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-4 gap-10 border-t border-green-200">
        {/* Brand / Logo */}
        <div className="text-center md:text-left col-span-1">
          <img
            src={logo}
            alt="GreenNest logo"
            className="h-12 w-auto mx-auto md:mx-0 drop-shadow-md transition-transform duration-300 hover:scale-110"
          />
          <h3 className="text-2xl font-semibold text-green-700 mt-3">
            GreenNest
          </h3>
          <p className="text-sm opacity-80 mt-2 max-w-xs mx-auto md:mx-0">
            Bring nature home — plant care, decor, and inspiration for a greener
            life.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-lg text-green-800 mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {["About", "Contact", "Privacy Policy"].map((label) => (
              <li key={label}>
                <Link
                  to="#"
                  className="relative inline-block text-gray-700 hover:text-green-700 transition-all duration-300 group"
                >
                  {label}
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-lg text-green-800 mb-3">Services</h4>
          <ul className="space-y-2">
            {["Branding", "Design", "Marketing", "Advertisement"].map((s) => (
              <li key={s}>
                <Link
                  to="#"
                  className="relative inline-block text-gray-700 hover:text-green-700 transition-all duration-300 group"
                >
                  {s}
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="text-center md:text-right">
          <h4 className="font-semibold text-lg text-green-800 mb-3">Follow Us</h4>
          <div className="flex justify-center md:justify-end gap-4 flex-nowrap overflow-x-auto md:overflow-visible">
            {[
              { icon: <FaTwitter />, label: "Twitter", color: "from-sky-400 to-sky-600" },
              { icon: <FaInstagram />, label: "Instagram", color: "from-pink-500 to-rose-500" },
              { icon: <FaFacebookF />, label: "Facebook", color: "from-blue-600 to-indigo-600" },
              { icon: <FaGithub />, label: "GitHub", color: "from-gray-800 to-gray-600" },
              { icon: <FaLinkedin />, label: "LinkedIn", color: "from-sky-400 to-blue-500" },
              { icon: <FaPinterest />, label: "Pinterest", color: "from-pink-500 to-rose-500" },
            ].map((item, i) => (
              <a
                key={i}
                href="#"
                aria-label={item.label}
                className={`relative group inline-flex h-9 w-9 items-center justify-center 
                rounded-full bg-gradient-to-br ${item.color}
                text-white shadow-md transition-all duration-300 
                hover:shadow-lg hover:scale-110 hover:rotate-6 active:scale-95`}
                title={item.label}
              >
                <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-[-5deg]">
                  {item.icon}
                </span>
                <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 blur-md transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 border-t border-green-200 py-5">
        © 2025{" "}
        <span className="text-green-700 font-medium hover:text-green-900 transition-colors">
          GreenNest
        </span>
        . All rights reserved.
      </div>

      {/* gradient animation */}
      <style>{`
        @keyframes moveGradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
