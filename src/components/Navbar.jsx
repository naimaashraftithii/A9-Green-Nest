
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinkClass = ({ isActive }) =>
  `
  px-4 py-2 rounded-full text-sm md:text-base font-medium
  transition-all duration-200
  ${
    isActive
      ? "text-emerald-500 font-semibold"
      : "text-gray-300 hover:text-emerald-400"
  }
`;

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-gray-100">
      <nav className="max-w-7xl mx-auto px-4 relative h-16 flex items-center">

        {/* LEFT */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} className="h-9" alt="logo" />
            <span className="text-3xl font-bold text-green-500">
              Green<span className="text-green-300">Nest</span>
            </span>
          </Link>
        </div>

        {/* CENTER */}
        <ul className="
          hidden md:flex gap-6 absolute left-1/2 -translate-x-1/2
        ">
          <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/plants" className={navLinkClass}>Plants</NavLink></li>

          {user && (
            <>
              <li><NavLink to="/profile" className={navLinkClass}>My Profile</NavLink></li>
              <li><NavLink to="/about" className={navLinkClass}>About Us</NavLink></li>
              <li><NavLink to="/services" className={navLinkClass}>Services</NavLink></li>
            </>
          )}
        </ul>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-3 ml-auto">

          {/* THEME BUTTON */}
          <button
            onClick={toggleTheme}
            className="h-8 w-8 rounded-full border border-slate-600 flex items-center justify-center bg-slate-800"
          >
            {theme === "light" ? "🌙" : "🔆"}
          </button>

          {/* BUTTONS */}
          {!user ? (
            <>
              <Link
                to="/login"
                className="px-4 py-1 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-1 rounded-md bg-green-600 text-white hover:bg-green-700"
              >
                Register
              </Link>
            </>
          ) : (
            <button onClick={logout} className="px-4 py-1 rounded-md bg-red-500">
              Logout
            </button>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden ml-auto flex items-center gap-2">
          <button onClick={toggleTheme} className="h-8 w-8 bg-slate-800 rounded-full border border-slate-600">
            {theme === "light" ? "🌙" : "🔆"}
          </button>

          <button onClick={() => setOpen(!open)} className="text-xl">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pb-4">
          <ul className="flex flex-col gap-2 pt-3">
            <NavLink to="/" className={navLinkClass} onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/plants" className={navLinkClass} onClick={() => setOpen(false)}>Plants</NavLink>

            {user && (
              <>
                <NavLink to="/profile" className={navLinkClass} onClick={() => setOpen(false)}>My Profile</NavLink>
                <NavLink to="/about" className={navLinkClass} onClick={() => setOpen(false)}>About Us</NavLink>
                <NavLink to="/services" className={navLinkClass} onClick={() => setOpen(false)}>Services</NavLink>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
